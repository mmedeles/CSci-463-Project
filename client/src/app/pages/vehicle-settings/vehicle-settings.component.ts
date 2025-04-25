import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {RouterLink} from '@angular/router';

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
export class VehicleSettingsComponent {}
