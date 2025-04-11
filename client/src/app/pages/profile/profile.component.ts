import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [
    NgIf
  ],
  template: `
    <h2>My Profile</h2>
    <p *ngIf="username">👤 Logged in as: <strong>{{ username }}</strong></p>
    <p *ngIf="!username">❌ Not logged in</p>
    <button (click)="logout()">Logout</button>
  `
})
export class ProfileComponent {
  username: string | null = null;

  constructor(private auth: AuthService) {
    this.auth.getProfile().subscribe({
      next: data => this.username = data.username,
      error: () => this.username = null
    });
  }

  logout(): void {
    this.auth.logout().subscribe(() => {
      this.username = null;
      alert('Logged out ✅');
    });
  }
}
