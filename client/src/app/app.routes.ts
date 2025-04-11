import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import {ChangePasswordComponent} from './pages/change-password/change-password.component';


export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: './register', component: RegisterComponent },
  { path: 'change-password', component: ChangePasswordComponent }

];
