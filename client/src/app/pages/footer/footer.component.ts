import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [
    RouterLink
  ],
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {}
