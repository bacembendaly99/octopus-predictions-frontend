import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FootballService} from '../../shared/services/football/football.service';
import {Team} from '../../shared/dto/team.interface';
import {DomSanitizer} from '@angular/platform-browser';
import {AuthService} from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
    currentTeam: any;
    logo: any;
  constructor( private footballService: FootballService,
               private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    this.getTeam(this.route.snapshot.paramMap.get('id'));
    // this.getLogo(this.currentTeam.logoId);
  }
  getTeam(id: any): void {
    this.footballService.getTeam(id)
        .subscribe(
            data => {
              console.log(data);
               this.currentTeam = new Team(data._id, data.name, data.sport.name, data.country.name, data.logo, data.country.flag);
               console.log(this.currentTeam);
            },
            error => {
              console.log(error);
            });
    this.authService.isLogged();

  }
    // getLogo(id: string): void {
    //     this.footballService.getTeamLogo(id)
    //         .subscribe(
    //             data => {
    //                 const objectURL = 'data:image/jpeg;base64,' + data.image;
    //                 this.logo = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    //
    //             },
    //             error => {
    //                 console.log(error);
    //             });
    // }
}
