import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  goToProfile(): void {
    this.router.navigate(['/profile']);
  }

  onMenuClick(): void {
    // You can open a sidebar or emit an event here
    console.log('Menu clicked');
    // Example: this.menuService.toggleSidebar();
  }
}
