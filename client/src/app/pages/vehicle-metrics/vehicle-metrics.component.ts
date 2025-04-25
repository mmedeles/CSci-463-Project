import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-vehicle-metrics',
  templateUrl: './vehicle-metrics.component.html',
  imports: [
    NgForOf,
    HeaderComponent
  ],
  styleUrls: ['./vehicle-metrics.component.scss']
})
export class VehicleMetricsComponent {
  metrics = [
    {
      label: 'Engine Temp',
      value: '212°F',
    },
    {
      label: 'Fuel Economy',
      value: '26.4 MPG',
    },
    {
      label: 'Miles Remaining',
      value: '67.2 MI',
    },
    {
      label: 'Engine RPM',
      value: '2.7K RPM',
    },
    {
      label: 'External Temp',
      value: '32°F',
    }
  ];
}
