import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-vehicle-management',
  templateUrl: './vehicle-management.component.html',
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    HeaderComponent
  ],
  styleUrls: ['./vehicle-management.component.scss']
})
export class VehicleManagementComponent implements OnInit {
  vehicles: any[] = [];
  newVehicle: any = {
    make: '',
    model: '',
    year: '',
    color: '',
    licensePlate: '',
    vin: '',
    nickname: ''
  };
  showAddVehicleForm = false;

  constructor(private router: Router, private notificationService: NotificationService) {}

  ngOnInit(): void {
    const savedVehicles = localStorage.getItem('vehicles');
    if (savedVehicles) {
      this.vehicles = JSON.parse(savedVehicles);
    }
  }

  addVehicle(): void {
    if (this.newVehicle.make && this.newVehicle.model) {
      const newEntry = { ...this.newVehicle };
      this.vehicles.push(newEntry);
      this.saveVehicles();
      this.newVehicle = { make: '', model: '', year: '', color: '', licensePlate: '', vin: '', nickname: '' };
      this.showAddVehicleForm = false;
      alert('Vehicle added successfully!');
      this.notificationService.addNotification(`Vehicle Added: ${newEntry.year} ${newEntry.make} ${newEntry.model}`);
    }
  }

  removeVehicle(index: number): void {
    const vehicle = this.vehicles[index];
    if (confirm('Are you sure you want to delete this vehicle?')) {
      this.vehicles.splice(index, 1);
      this.saveVehicles();
      alert('Vehicle deleted successfully!');
      this.notificationService.addNotification(`Vehicle Deleted: ${vehicle.year} ${vehicle.make} ${vehicle.model}`);
    }
  }

  saveVehicles(): void {
    localStorage.setItem('vehicles', JSON.stringify(this.vehicles));
  }

  goToVehicleControls(vehicle: any): void {
    localStorage.setItem('selectedVehicle', JSON.stringify(vehicle));
    this.router.navigate(['/vehicle-controls']);
  }

  getDisplayName(vehicle: any): string {
    if (vehicle.nickname && vehicle.nickname.trim() !== '') {
      return `${vehicle.nickname} (${vehicle.year} ${vehicle.make} ${vehicle.model})`;
    } else {
      return `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
    }
  }
}
