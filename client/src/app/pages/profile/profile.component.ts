import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router, RouterLink} from '@angular/router';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  imports: [
    HeaderComponent,
    RouterLink
  ],
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username: string = '';
  avatarUrl: string = 'https://cdn-icons-png.flaticon.com/512/847/847969.png'; // Default avatar

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.getProfile().subscribe({
      next: (data) => {
        this.username = data.username;
        if (data.avatarUrl) {
          this.avatarUrl = data.avatarUrl;
        }
      },
      error: () => {
        this.router.navigate(['/login']);
      }
    });
  }

  /**
   * Handles avatar image change (preview only).
   * Integrate server-side avatar update here if needed.
   */
  onAvatarChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.avatarUrl = reader.result as string;

        // TODO: Upload avatar to backend here
        // this.authService.updateAvatar(file).subscribe(...)
      };

      reader.readAsDataURL(file);
    }
  }

  /**
   * Prompt the user to edit their name and update it locally.
   * Optionally send update to backend.
   */
  editName(): void {
    const newName = prompt('Enter your new display name:', this.username);
    if (newName && newName.trim() !== '' && newName !== this.username) {
      this.username = newName;

      // TODO: Send updated name to backend if needed
      // this.authService.updateUsername(newName).subscribe(...)
    }
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        alert('Logged out ✅');
        this.router.navigate(['/login']);
      },
      error: () => {
        alert('Logout failed ❌');
      }
    });
  }

  deleteAccount(): void {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      this.authService.deleteAccount().subscribe({
        next: () => {
          alert('Account deleted ✅');
          this.router.navigate(['/login']);
        },
        error: () => {
          alert('Account deletion failed ❌');
        }
      });
    }
  }
}
