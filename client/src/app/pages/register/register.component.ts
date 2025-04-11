import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username = '';
  password = '';
  message = '';
  success = false;

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    const payload = { username: this.username, password: this.password };

    this.authService.register(payload).subscribe({
      next: () => {
        this.message = 'Registration successful ✅';
        this.success = true;

        // Redirect to /profile
        setTimeout(() => {
          this.router.navigate(['/profile']);
        }, 500);
      },
      error: (err) => {
        this.message = 'Registration failed ❌';
        this.success = false;
        console.error(err);
      }
    });
  }
}
