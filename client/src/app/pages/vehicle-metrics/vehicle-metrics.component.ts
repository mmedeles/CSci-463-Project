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
      icon: 'https://cdn-icons-png.flaticon.com/512/3103/3103982.png'
    },
    {
      label: 'Fuel Economy',
      value: '26.4 MPG',
      icon: 'https://cdn-icons-png.flaticon.com/512/535/535137.png'
    },
    {
      label: 'Miles Remaining',
      value: '67.2 MI',
      icon: 'https://cdn-icons-png.flaticon.com/512/2920/2920250.png'
    },
    {
      label: 'Engine RPM',
      value: '2.7K RPM',
      icon: 'https://cdn-icons-png.flaticon.com/512/7186/7186280.png'
    },
    {
      label: 'External Temp',
      value: '32°F',
      icon: 'https://cdn-icons-png.flaticon.com/512/869/869869.png'
    }
  ];
}
