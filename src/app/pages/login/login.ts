import { Component } from '@angular/core';
import { LoginFormComponent } from '../../shared/components/login-form/login-form.component';


@Component({
  standalone: true,
  selector: 'app-about-page',
  imports: [LoginFormComponent],
  template: ` <app-login-form></app-login-form> `,
  styles: ``,
})
export class LoginComponent {}
