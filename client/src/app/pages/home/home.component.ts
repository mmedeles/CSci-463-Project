import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import this
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  status: string = '';
  timestamp: string = '';
  counter: number | null = null;
  counterTimestamp: string = '';

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getBackendStatus().subscribe({
      next: (res) => {
        this.status = res.status;
        this.timestamp = res.timestamp;
      },
      error: () => {
        this.status = 'Failed to fetch backend status';
      }
    });
  }

  increment(): void {
    this.apiService.incrementCounter().subscribe({
      next: (res) => {
        console.log('Backend response:', res); // ✅ Debug
        this.counter = res.counter;
        this.counterTimestamp = res.timestamp;
      },
      error: (err) => {
        console.error(err); // ✅ Debug
        this.counter = -1;
        this.counterTimestamp = '';
      }
    });
  }
}
