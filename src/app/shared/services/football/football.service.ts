import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
// const FootUrl = 'http://localhost:3000/football/'
@Injectable({
  providedIn: 'root'
})
export class FootballService {

  constructor(private http: HttpClient) { }
  getTeam(id: any): Observable<any> {
    return this.http.get(`${environment.API_BASE}football/team/${id}`);
  }
  // getTeamLogo(id: string): Observable<any> {
  //   return this.http.get(`${FootUrl}getLogo/${id}`);
  // }
}
