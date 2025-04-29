import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    HeaderComponent,
    FooterComponent,
    NgIf
  ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username: string = '';
  message: string = '';
  success: boolean = false;
  engineOn: boolean = false;
  doorsLocked: boolean = false;

  constructor(private authService: AuthService, private apiService: ApiService, private router: Router) {}

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

  //removed API call
  toggleLock(): void{
    this.doorsLocked = !this.doorsLocked;
  }

  toggleEngine(): void {
    this.engineOn = !this.engineOn;
  }
}
