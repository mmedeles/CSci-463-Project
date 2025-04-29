import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgClass, NgForOf} from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { NotificationService } from '../../services/notification.service';

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

  allNotifications: any[] = [
    {
      label: 'TODAY',
      entries: [
        { title: 'Oil Change Due', time: '2025/4/19 12:40PM', model: '20XX Make Model', priority: 'informative' },
        { title: 'Wiper Fluid Empty', time: '2025/4/19 12:35PM', model: '20XX Make Model', priority: 'warning' }
      ]
    },
    {
      label: 'YESTERDAY',
      entries: [
        { title: 'Tire Pressure Low', time: '2025/4/18 12:40PM', model: '20XX Make Model', priority: 'critical' }
      ]
    }
  ];

  groupedNotifications: any[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.groupedNotifications = [...this.allNotifications];
    this.notificationService.getNotifications().forEach(notification => {
      this.addNewNotification(notification.title);
    });
    this.notificationService.newNotification$.subscribe(notification => {
      this.addNewNotification(notification.title);
    });
  }

  filterNotifications(): void {
    if (this.selectedFilter === 'All') {
      this.groupedNotifications = [...this.allNotifications];
    } else {
      this.groupedNotifications = this.allNotifications.filter(group => group.label === this.selectedFilter.toUpperCase());
    }
  }

  addNewNotification(title: string): void {
    const todayGroup = this.allNotifications.find(group => group.label === 'TODAY');
    if (todayGroup) {
      todayGroup.entries.unshift({
        title: title,
        time: new Date().toLocaleString(),
        model: 'App',
        priority: 'informative'
      });
    } else {
      this.allNotifications.unshift({
        label: 'TODAY',
        entries: [{
          title: title,
          time: new Date().toLocaleString(),
          model: 'App',
          priority: 'informative'
        }]
      });
    }
    this.filterNotifications();
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
