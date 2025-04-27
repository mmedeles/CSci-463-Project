import { Component } from '@angular/core';
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
export class VehicleControlsComponent {

  constructor(private router: Router) {}

  openSetNicknameDialog(): void {
    const nickname = prompt('Enter new vehicle nickname:');
    if (nickname) {
      // TODO: Send nickname to server later
      alert(`Nickname set to: ${nickname}`);
    }
  }

  confirmDeleteVehicle(): void {
    if (confirm('Are you sure you want to delete this vehicle? This action cannot be undone.')) {
      // TODO: Send delete request to server later
      alert('Vehicle deleted successfully!');
      this.router.navigate(['/home']);
    }
  }
}
