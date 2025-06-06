import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
// import { Observable } from 'rxjs';
import { User } from '../models/types';

interface ApiResponse {
  results: User[];
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: string = 'https://randomuser.me/api/?results=20';

  private _users = signal<User[]>([]);
  private _loading = signal<boolean>(false);
  private _error = signal<boolean>(false);
  users = computed(() => this._users());
  loading = computed(() => this._loading());
  error = computed(() => this._error());

  constructor(private http: HttpClient) {
    console.log('UsersService initialized');
    this.getUsers();
  }

  getUsers() {
    this._users.set([]);
    this._loading.set(true);
    this._error.set(false);

    this.http.get<ApiResponse>(this.baseUrl).subscribe({
      next: (res) => {
        console.log('API response:', res);
        this._users.set(res.results);
        this._loading.set(false);
      },
      error: (err) => {
        console.error('API error:', err);
        this._error.set(true);
        this._loading.set(false);
      },
    });
  }
}
