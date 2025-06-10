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
      this.notify.show("Authentication", "You are not authenticated. Please log in to continue.");
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
