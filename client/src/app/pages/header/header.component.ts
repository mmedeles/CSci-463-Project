import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    RouterLink,
    NgIf
  ],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isOpen: boolean = false;

  constructor(private router: Router) {}

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  goToProfile(): void {
    this.router.navigate(['/profile']);
  }
}
