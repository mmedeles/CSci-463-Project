import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [
    NgClass,
    RouterLink
  ],
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public router: Router) {}
}
