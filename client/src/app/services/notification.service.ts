import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private newNotificationSubject = new Subject<{ title: string }>();
  newNotification$ = this.newNotificationSubject.asObservable();

  private notifications: { title: string }[] = [];

  constructor() {}

  addNotification(title: string) {
    const notification = { title };
    this.notifications.unshift(notification);
    this.newNotificationSubject.next(notification);
  }

  getNotifications() {
    return this.notifications;
  }
}
