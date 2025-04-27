import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  message = '';
  success = false;

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    const credentials = {
      username: this.username,
      password: this.password
    };

    this.authService.login(credentials).subscribe({
      next: () => {
        this.success = true;
        this.message = 'Login successful ✅';

        setTimeout(() => {
          this.router.navigate(['/profile']);
        }, 500);
      },
      error: (err) => {
        this.success = false;
        this.message = 'Login failed ❌';
        console.error(err);
      }
    });
  }
}
