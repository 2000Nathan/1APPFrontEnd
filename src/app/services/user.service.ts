import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;


  constructor( private http: HttpClient) { 

    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/users/';
  }

  //Servidio para registrar un usuario
  signIn(user: User) : Observable<any>  {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, user);
  }
}
