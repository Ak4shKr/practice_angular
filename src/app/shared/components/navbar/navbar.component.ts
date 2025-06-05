import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../utils/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
})  
export class NavbarComponent {
  isLoggedIn: boolean = false;

 constructor(private auth: AuthService, private router: Router) {
    this.auth.isLoggedIn$.subscribe(status => {
    this.isLoggedIn = status;
    });
  }

  handleAuthAction() {
    if (this.isLoggedIn) {
      this.auth.logout();
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}