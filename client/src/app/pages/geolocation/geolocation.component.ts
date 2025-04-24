import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  styleUrls: ['./geolocation.component.scss']
})
export class GeolocationComponent {
  setGeofence() {
    alert('Set Geofence - feature coming soon!');
  }

  clearHistory() {
    alert('History cleared!');
  }
}
