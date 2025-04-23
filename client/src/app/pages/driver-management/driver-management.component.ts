import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-driver-management',
  templateUrl: './driver-management.component.html',
  imports: [
    NgForOf,
    HeaderComponent
  ],
  styleUrls: ['./driver-management.component.scss']
})
export class DriverManagementComponent {
  drivers = [
    { name: 'Franklin Roosevelt', email: 'frank@whitehouse.gov' },
    { name: 'George Washington', email: 'george@whitehouse.gov' },
    { name: 'Abraham Lincoln', email: 'abe@whitehouse.gov' }
  ];

  addDriver() {
    // TODO: Replace with form or dialog input later
    alert('Add New Driver clicked!');
  }
}
