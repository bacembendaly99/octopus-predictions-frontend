import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserRegister} from '../../dto/userRegiter.interface';
import {Observable} from 'rxjs';

const AuthUrl = 'http://localhost:8443/auth/';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;
  constructor(private http: HttpClient) { }
// login(data: UserRegister) {
//     // return this.http.post<any>(AuthUrl + 'signup' , data)
// }
}
