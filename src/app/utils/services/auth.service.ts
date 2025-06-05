import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('angular_user'));

  isLoggedIn$ = this.loggedIn.asObservable();

  login(email: string) {
    localStorage.setItem('angular_user', email);
    this.loggedIn.next(true);
  }

  logout() {
    localStorage.removeItem('angular_user');
    this.loggedIn.next(false);
  }
}
