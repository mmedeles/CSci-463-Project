import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username: string = '';
  engineOn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getProfile().subscribe({
      next: (data) => {
        this.username = data.username;
      }
    });
  }

  toggleEngine(): void {
    this.engineOn = !this.engineOn;
  }
}
