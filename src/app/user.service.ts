import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  createUser(user: User):Observable<User>{
    let httpHeader = new HttpHeaders().set('content-type', 'application/Json')
    let options={headers: httpHeader}
    return this.http.post<User>(this.url,user,options)
    
  }

  getUserId(userId:string){
    return this.http.get<User>(this.url+'/'+userId)

  }
  updateUser(user: User):Observable<User>{
    let httpHeader = new HttpHeaders().set('content-type', 'application/Json')
    let options={headers: httpHeader}
    return this.http.put<User>(this.url+'/'+user.id,user,options)
    
  }
  deleteUser(userId: string):Observable<number>{
    
    return this.http.delete<number>(this.url+'/'+userId)
    
  }
  
}
