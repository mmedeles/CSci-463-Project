import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isOpen = false;

  constructor(private router: Router) {}

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  goToProfile(): void {
    this.router.navigate(['/profile']);
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  handleClick(path: string): void {
    if (this.router.url === path) {
      // Refresh current route
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([path]);
      });
    } else {
      this.router.navigate([path]);
    }
    this.isOpen = false;
  }
}
