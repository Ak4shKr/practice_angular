import { Component } from '@angular/core';
import { AboutComponent } from '../../shared/components/users/users.component';

@Component({
  standalone: true,
  selector: 'app-about-page',
  imports: [AboutComponent],
  template: ` <app-about></app-about> `,
  styles: ``,
})
export class About {}
