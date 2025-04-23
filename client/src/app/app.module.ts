import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {ProfileComponent} from './pages/profile/profile.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {DriverManagementComponent} from './pages/driver-management/driver-management.component';
import {VehicleSettingsComponent} from './pages/vehicle-settings/vehicle-settings.component';
import {MoreComponent} from './pages/more/more.component';
import {AboutComponent} from './pages/about/about.component';
import {HelpCenterComponent} from './pages/help-center/help-center.component';
import {SupportComponent} from './pages/support/support.component';
import {NotificationsComponent} from './pages/notifications/notifications.component';



const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'driver-management', component: DriverManagementComponent },
  { path: 'vehicle-settings', component: VehicleSettingsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'more', component: MoreComponent },
  { path: 'about', component: AboutComponent },
  { path: 'help-center', component: HelpCenterComponent },
  { path: 'support', component: SupportComponent },

];

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,

    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    SettingsComponent,
    DriverManagementComponent,
    VehicleSettingsComponent,
    NotificationsComponent,
    MoreComponent,
    AboutComponent,
    HelpCenterComponent,
    SupportComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
