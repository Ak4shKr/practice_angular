import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NotificationService } from '../services/toast.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private notify: NotificationService) {
    console.log('AuthGuard initialized');
  }

  canActivate(): boolean {
    const token = localStorage.getItem('angular_user');
    if (!token) {
      this.notify.show('Please login to access this route.', 'Unauthorized');
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
