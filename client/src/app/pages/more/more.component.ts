import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-more',
  imports: [
    RouterLink,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './more.component.html',
  styleUrl: './more.component.scss'
})
export class MoreComponent {

}
