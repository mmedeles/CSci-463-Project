import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-vehicle-controls',
  templateUrl: './vehicle-controls.component.html',
  imports: [
    RouterLink,
    HeaderComponent
  ],
  styleUrls: ['./vehicle-controls.component.scss']
})
export class VehicleControlsComponent implements OnInit {
  vehicle: any = null;
  newNickname: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const selectedVehicle = localStorage.getItem('selectedVehicle');
    if (selectedVehicle) {
      this.vehicle = JSON.parse(selectedVehicle);
    }
  }

  openSetNicknameDialog(): void {
    const nickname = prompt('Enter a new nickname for your vehicle:', this.vehicle?.nickname || '');
    if (nickname !== null && nickname.trim() !== '') {
      this.vehicle.nickname = nickname.trim();
      this.updateVehicleInStorage();
      alert('Nickname updated successfully!');
    }
  }

  confirmDeleteVehicle(): void {
    if (confirm('Are you sure you want to delete this vehicle? This action cannot be undone.')) {
      const vehicles = JSON.parse(localStorage.getItem('vehicles') || '[]');
      const updatedVehicles = vehicles.filter((v: any) => v.vin !== this.vehicle.vin);
      localStorage.setItem('vehicles', JSON.stringify(updatedVehicles));

      // If deleted vehicle was selected, clear selection
      localStorage.removeItem('selectedVehicle');

      alert('Vehicle deleted successfully.');
      this.router.navigate(['/home']);
    }
  }

  private updateVehicleInStorage(): void {
    const vehicles = JSON.parse(localStorage.getItem('vehicles') || '[]');
    const index = vehicles.findIndex((v: any) => v.vin === this.vehicle.vin);
    if (index !== -1) {
      vehicles[index] = this.vehicle;
      localStorage.setItem('vehicles', JSON.stringify(vehicles));
      localStorage.setItem('selectedVehicle', JSON.stringify(this.vehicle));
    }
  }
}
