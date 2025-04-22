import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-driver-management',
  templateUrl: './driver-management.component.html',
  imports: [
    FormsModule,
    NgForOf
  ],
  styleUrls: ['./driver-management.component.scss']
})
export class DriverManagementComponent {
  drivers = [
    { name: 'Franklin Roosevelt', email: 'frank@whitehouse.gov' },
    { name: 'George Washington', email: 'george@whitehouse.gov' },
    { name: 'Abraham Lincoln', email: 'abe@whitehouse.gov' }
  ];

  newDriver = {
    name: '',
    email: ''
  };

  addDriver() {
    if (this.newDriver.name && this.newDriver.email) {
      this.drivers.push({ ...this.newDriver });
      this.newDriver.name = '';
      this.newDriver.email = '';
    }
  }

  deleteDriver(driverToDelete: { name: string, email: string }) {
    this.drivers = this.drivers.filter(driver => driver !== driverToDelete);
  }
}
