import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  message = '';

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  submit(): void {
    const { username, password } = this.loginForm.value;

    this.auth.login(username, password).subscribe({
      next: res => this.message = 'Login successful ✅',
      error: err => this.message = 'Login failed ❌'
    });
  }
}
