import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-driver-management',
  templateUrl: './driver-management.component.html',
  imports: [
    HeaderComponent,
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

  editDriver(driver: any): void {
    const newName = prompt('Edit name:', driver.name);
    const newEmail = prompt('Edit email:', driver.email);
    if (newName && newEmail) {
      driver.name = newName;
      driver.email = newEmail;
    }
  }

  removeDriver(driver: any): void {
    const confirmed = confirm(`Are you sure you want to remove ${driver.name}?`);
    if (confirmed) {
      this.drivers = this.drivers.filter(d => d !== driver);
    }
  }

  addDriver(): void {
    const name = prompt('Enter driver name:');
    const email = prompt('Enter driver email:');
    if (name && email) {
      this.drivers.push({ name, email });
    }
  }
}
