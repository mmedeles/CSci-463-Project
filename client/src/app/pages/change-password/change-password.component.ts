import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  newPassword = '';
  confirmPassword = '';
  success = false;
  error = false;
  mismatch = false;

  constructor(private authService: AuthService) {}

  onSubmit(event: Event): void {
    event.preventDefault();
    this.success = false;
    this.error = false;
    this.mismatch = false;

    if (this.newPassword !== this.confirmPassword) {
      this.mismatch = true;
      return;
    }

    this.authService.changePassword(this.newPassword).subscribe({
      next: () => {
        this.success = true;
        this.newPassword = '';
        this.confirmPassword = '';
      },
      error: () => {
        this.error = true;
      }
    });
  }
}
