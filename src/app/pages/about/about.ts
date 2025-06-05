import { Component } from '@angular/core';
import { AboutComponent } from '../../shared/components/about/about.component';

@Component({
  selector: 'app-about-page',
  imports: [AboutComponent],
  template: ` <app-about></app-about> `,
  styles: ``,
})
export class About {}
