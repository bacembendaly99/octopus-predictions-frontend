import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserRegister} from '../../dto/userRegister.interface';
import {Observable} from 'rxjs';

const AuthUrl = 'http://localhost:3000/auth/';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;
  constructor(private http: HttpClient) { }
register(data: UserRegister) {
     return this.http.post<any>(AuthUrl + 'signup' , data)
}
}
