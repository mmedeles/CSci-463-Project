import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getProfile().subscribe({
      next: (data) => {
        this.username = data.username;
      },
      error: () => {
        this.router.navigate(['/login']);
      }
    });
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
