import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-vehicle-management',
  templateUrl: './vehicle-management.component.html',
  imports: [
    FormsModule,
    NgIf,
    HeaderComponent,
    NgForOf
  ],
  styleUrls: ['./vehicle-management.component.scss']
})
export class VehicleManagementComponent {
  vehicles: any[] = [];
  showAddVehicleForm = false;

  newVehicle = {
    make: '',
    model: '',
    year: '',
    color: '',
    licensePlate: '',
    vin: ''
  };

  constructor(private router: Router) {}

  addVehicle() {
    this.vehicles.push({ ...this.newVehicle });
    this.newVehicle = { make: '', model: '', year: '', color: '', licensePlate: '', vin: '' };
    this.showAddVehicleForm = false;
  }

  removeVehicle(index: number) {
    if (confirm('Are you sure you want to remove this vehicle?')) {
      this.vehicles.splice(index, 1);
    }
  }

  goToVehicleControls(vehicle: any) {
    // For now just navigate to vehicle-controls page
    // Later: Pass vehicle data if needed
    this.router.navigate(['/vehicle-controls']);
  }
}
