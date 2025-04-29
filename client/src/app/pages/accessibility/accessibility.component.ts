import { Component } from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-accessibility',
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './accessibility.component.html',
  styleUrl: './accessibility.component.scss'
})
export class AccessibilityComponent {

}
