import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private open = new BehaviorSubject<boolean>(false);
  isOpen$ = this.open.asObservable();

  toggle(): void {
    this.open.next(!this.open.value);
  }

  close(): void {
    this.open.next(false);
  }
}
