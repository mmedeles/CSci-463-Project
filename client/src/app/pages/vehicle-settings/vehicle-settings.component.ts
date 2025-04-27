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
  vehicleName: string = 'Vehicle';

  ngOnInit(): void {
    const selectedVehicle = localStorage.getItem('selectedVehicle');
    if (selectedVehicle) {
      const vehicle = JSON.parse(selectedVehicle);
      if (vehicle.nickname && vehicle.nickname.trim() !== '') {
        this.vehicleName = `${vehicle.nickname} (${vehicle.year} ${vehicle.make} ${vehicle.model})`;
      } else {
        this.vehicleName = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
      }
    }
  }
}
