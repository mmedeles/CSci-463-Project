import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vehicle-settings',
  templateUrl: './vehicle-settings.component.html',
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterLink
  ],
  styleUrls: ['./vehicle-settings.component.scss']
})
export class VehicleSettingsComponent implements OnInit {
  vehicles: any[] = [];
  selectedVehicleIndex = 0;
  vehicleName: string = 'No Vehicles';

  // State tracking
  isLocked: boolean = true;
  isAlarmOn: boolean = false;

  ngOnInit(): void {
    const savedVehicles = localStorage.getItem('vehicles');
    if (savedVehicles) {
      this.vehicles = JSON.parse(savedVehicles);
      if (this.vehicles.length > 0) {
        this.updateVehicleDisplay();
      }
    }
  }

  updateVehicleDisplay(): void {
    const vehicle = this.vehicles[this.selectedVehicleIndex];
    if (vehicle) {
      if (vehicle.nickname && vehicle.nickname.trim() !== '') {
        this.vehicleName = `${vehicle.nickname} (${vehicle.year} ${vehicle.make} ${vehicle.model})`;
      } else {
        this.vehicleName = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
      }
    } else {
      this.vehicleName = 'No Vehicles';
    }
  }

  nextVehicle(): void {
    if (this.vehicles.length > 0) {
      this.selectedVehicleIndex = (this.selectedVehicleIndex + 1) % this.vehicles.length;
      this.updateVehicleDisplay();
    }
  }

  lockOrUnlock(): void {
    this.isLocked = !this.isLocked;
    alert(`Vehicle is now ${this.isLocked ? 'locked' : 'unlocked'}`);
  }

  stopAlarm(): void {
    this.isAlarmOn = !this.isAlarmOn;
    alert(`Alarm is now ${this.isAlarmOn ? 'ON' : 'OFF'}`);
  }
}
