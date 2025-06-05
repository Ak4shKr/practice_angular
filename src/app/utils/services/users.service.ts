import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/types';

interface ApiResponse {
  results: User[];
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl:string = 'https://randomuser.me/api/?results=20';  

  constructor(private http:HttpClient) { }

  getUsers():Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }
}
