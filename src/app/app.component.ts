import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [NavbarComponent, RouterOutlet, RouterModule],
})
export class AppComponent {
  title = 'ToDoListApp';
}
