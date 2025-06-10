import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [NavbarComponent, RouterOutlet, RouterModule, ToastModule],
})
export class AppComponent {
  title = 'ToDoListApp';
}
