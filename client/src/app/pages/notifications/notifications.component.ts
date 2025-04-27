import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgClass, NgForOf} from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  imports: [
    FormsModule,
    NgForOf,
    HeaderComponent,
    NgClass
  ],
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  selectedFilter: string = 'All';
  filterOptions: string[] = ['All', 'Today', 'Yesterday'];

  allNotifications = [
    {
      label: 'TODAY',
      entries: [
        {
          title: 'Oil Change Due',
          time: '2025/4/19 12:40PM',
          model: '20XX Make Model',
          priority: 'warning'
        },
        {
          title: 'Wiper Fluid Empty',
          time: '2025/4/19 12:35PM',
          model: '20XX Make Model',
          priority: 'informative'
        }
      ]
    },
    {
      label: 'YESTERDAY',
      entries: [
        {
          title: 'Tire Pressure Low',
          time: '2025/4/18 12:40PM',
          model: '20XX Make Model',
          priority: 'critical'
        }
      ]
    }
  ];

  groupedNotifications = [...this.allNotifications];

  constructor() {}

  ngOnInit(): void {
    this.filterNotifications();
  }

  filterNotifications(): void {
    if (this.selectedFilter === 'All') {
      this.groupedNotifications = [...this.allNotifications];
    } else {
      this.groupedNotifications = this.allNotifications.filter(group => group.label === this.selectedFilter.toUpperCase());
    }
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'informative':
        return 'informative';
      case 'warning':
        return 'warning';
      case 'critical':
        return 'critical';
      default:
        return '';
    }
  }
}
