import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  message = '';

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.registerForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  submit(): void {
    const { username, password } = this.registerForm.value;

    this.auth.register(username, password).subscribe({
      next: res => this.message = 'Registration successful ✅',
      error: err => this.message = 'Registration failed ❌'
    });
  }
}
