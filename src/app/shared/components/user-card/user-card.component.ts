import { Component, Input } from '@angular/core';
import { User } from '../../../utils/models/types';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styles: ``
})
export class UserCardComponent {
  @Input() user!: User;  

}
