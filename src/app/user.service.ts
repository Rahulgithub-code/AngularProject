import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { User } from './User'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = '/api/user';
  constructor(private http: HttpClient) { }
  getUserDataFromMemory(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }
}
