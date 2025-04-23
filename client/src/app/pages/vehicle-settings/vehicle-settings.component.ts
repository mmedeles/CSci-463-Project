import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-vehicle-settings',
  templateUrl: './vehicle-settings.component.html',
  imports: [
    HeaderComponent
  ],
  styleUrls: ['./vehicle-settings.component.scss']
})
export class VehicleSettingsComponent {}
