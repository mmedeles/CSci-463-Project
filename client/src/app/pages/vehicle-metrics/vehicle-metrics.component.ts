import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-vehicle-metrics',
  templateUrl: './vehicle-metrics.component.html',
  standalone: true,
  imports: [
    NgForOf,
    HeaderComponent
  ],
  styleUrls: ['./vehicle-metrics.component.scss']
})
export class VehicleMetricsComponent implements OnInit {
  metrics: any[] = [];
  fuelType: string = '';

  ngOnInit(): void {
    this.initializeMetrics();
  }

  initializeMetrics(): void {
    // Load existing default metrics
    this.metrics = [
      { label: 'Engine Temp', value: '212°F' },
      { label: 'Fuel Economy', value: '26.4 MPG' },
      { label: 'Miles Remaining', value: '67.2 MI' },
      { label: 'Engine RPM', value: '2.7K RPM' },
      { label: 'External Temp', value: '32°F' }
    ];

    // Check for selected vehicle
    const savedVehicle = localStorage.getItem('selectedVehicle');
    if (savedVehicle) {
      const vehicle = JSON.parse(savedVehicle);
      this.fuelType = vehicle.fuelType || '';

      // Add fuel-type specific metric
      if (this.fuelType === 'EV') {
        this.metrics.unshift({ label: 'Battery Level', value: '85%' });
      } else if (this.fuelType === 'Gas') {
        this.metrics.unshift({ label: 'Fuel Level', value: '3/4 Tank' });
      } else if (this.fuelType === 'Hybrid') {
        this.metrics.unshift({ label: 'Hybrid Status', value: 'Gas: 1/2 Tank / Battery: 70%' });
      } else {
        this.metrics.unshift({ label: 'Fuel Type', value: 'Unknown' });
      }
    }
  }
}
