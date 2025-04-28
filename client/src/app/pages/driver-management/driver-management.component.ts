import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {NgForOf, NgIf} from '@angular/common';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-driver-management',
  templateUrl: './driver-management.component.html',
  imports: [
    HeaderComponent,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./driver-management.component.scss']
})
export class DriverManagementComponent implements OnInit {
  drivers = [
    { name: 'Franklin Roosevelt', vehicle: '20XX Ford Explorer' },
    { name: 'George Washington', vehicle: '20XX Chevrolet Tahoe' },
    { name: 'Abraham Lincoln', vehicle: '20XX Jeep Grand Cherokee' }
  ];

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {}

  editDriver(driver: any): void {
    const newName = prompt('Edit name:', driver.name);
    const newVehicle = prompt('Assign to vehicle:', driver.vehicle);
    if (newName && newVehicle) {
      driver.name = newName;
      driver.vehicle = newVehicle;
      this.notificationService.addNotification(`Driver updated: ${newName}`);
    }
  }

  removeDriver(driver: any): void {
    const confirmed = confirm(`Are you sure you want to remove ${driver.name}?`);
    if (confirmed) {
      this.drivers = this.drivers.filter(d => d !== driver);
      this.notificationService.addNotification(`Driver removed: ${driver.name}`);
    }
  }

  addDriver(): void {
    const name = prompt('Enter driver name:');
    const vehicle = prompt('Assign vehicle to driver:');
    if (name && vehicle) {
      this.drivers.push({ name, vehicle });
      this.notificationService.addNotification(`Driver added: ${name}`);
    }
  }
}
