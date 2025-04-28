import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-driver-management',
  templateUrl: './driver-management.component.html',
  styleUrls: ['./driver-management.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    NgForOf,
    NgIf,
    FormsModule
  ]
})
export class DriverManagementComponent implements OnInit {
  drivers: any[] = [];
  vehicles: any[] = [];
  editingDriver: any = null;
  isEditing = false;
  selectedVehicle: any = null;
  newDriverName = '';

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    const savedDrivers = localStorage.getItem('drivers');
    const savedVehicles = localStorage.getItem('vehicles');
    if (savedDrivers) {
      this.drivers = JSON.parse(savedDrivers);
    }
    if (savedVehicles) {
      this.vehicles = JSON.parse(savedVehicles);
    }
  }

  startAddDriver(): void {
    this.newDriverName = '';
    this.selectedVehicle = null;
    this.isEditing = true;
    this.editingDriver = null;
  }

  startEditDriver(driver: any): void {
    this.newDriverName = driver.name;
    this.selectedVehicle = driver.vehicle;
    this.isEditing = true;
    this.editingDriver = driver;
  }

  saveDriver(): void {
    if (!this.newDriverName || !this.selectedVehicle) {
      alert('Please enter a name and select a vehicle.');
      return;
    }

    if (this.editingDriver) {
      this.editingDriver.name = this.newDriverName;
      this.editingDriver.vehicle = this.selectedVehicle;
      this.notificationService.addNotification(`Driver ${this.newDriverName} updated.`);
    } else {
      this.drivers.push({
        name: this.newDriverName,
        vehicle: this.selectedVehicle
      });
      this.notificationService.addNotification(`Driver ${this.newDriverName} added.`);
    }

    this.saveDrivers();
    this.cancel();
  }

  removeDriver(driver: any): void {
    const confirmed = confirm(`Are you sure you want to remove ${driver.name}?`);
    if (confirmed) {
      this.drivers = this.drivers.filter(d => d !== driver);
      this.saveDrivers();
      this.notificationService.addNotification(`Driver ${driver.name} removed.`);
    }
  }

  cancel(): void {
    this.isEditing = false;
    this.newDriverName = '';
    this.selectedVehicle = null;
    this.editingDriver = null;
  }

  saveDrivers(): void {
    localStorage.setItem('drivers', JSON.stringify(this.drivers));
  }

  getVehicleDisplay(vehicle: any): string {
    return vehicle?.nickname ? `${vehicle.nickname} (${vehicle.year} ${vehicle.make} ${vehicle.model})`
      : `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
  }
}
