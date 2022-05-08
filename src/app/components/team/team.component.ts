import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FootballService} from '../../shared/services/football/football.service';
import {Team} from '../../shared/dto/team.interface';
import {DomSanitizer} from '@angular/platform-browser';
import {AuthService} from '../../shared/services/auth/auth.service';
import {League} from '../../shared/dto/league.interface';
import {error} from 'protractor';
import {Season} from '../../shared/dto/season.interface';
import {Match} from '../../shared/dto/match.interface';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
    environmentAPI = environment.API_BASE;
    currentTeam: Team;
    logo: any;
    leagues: [League];
    SeasonsSelected: [Season];
    selectedLeague: League;
    selectedLeagueId: string;
    selectedSeasonId: string;
    selectedGames: [Match]
    componentName = 'Team';


    constructor(private footballService: FootballService,
                private route: ActivatedRoute, private authService: AuthService, private router: Router) {
    }

    ngOnInit(): void {
        this.getTeam(this.route.snapshot.paramMap.get('id'));
        this.getLeagues(this.route.snapshot.paramMap.get('id'));
    }

    getTeam(id: any): void {
        this.footballService.getTeam(id)
            .subscribe(
                data => {
                    // console.log(data);
                    this.currentTeam = data;
                    // console.log(this.currentTeam);
                },
                error1 => {

                    console.log(error1);

                });

        // this.authService.isLogged();

    }

    getLeagues(id: any): void {
        this.footballService.getLeaguesByTeamId(id).subscribe(
            data => {
                this.leagues = data;
                console.log(this.leagues);
            },
            error2 => {
                console.log(error2);
            },
            // () => {  this.getSeasonbyLeagueId(this.leagues[0]._id); }

        )
    }

    updateSeasonsLeagueId(id: any): any {
        console.log(this.selectedLeague);
         this.footballService.getSeasonsByLeagueId(id).subscribe(
            data => {
                this.SeasonsSelected = data;
                // console.log(this.SeasonsSelected);

            },
            error2 => {
                console.log(error2);
            }
         // () => {return this.SeasonsSelected;}
        )}

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

    updateSelectedGames(selectedSeasonId: string) {
        this.footballService.getMatchesByTeamSeason(this.currentTeam._id, selectedSeasonId).subscribe(
            data => {
                this.selectedGames = data;
                console.log(this.selectedGames);
            },
            error1 => {
                console.log(error1);
            }
        )
    }

    getTeamNameById(id): any {
        this.footballService.getTeam(id)
            .subscribe(
                data => {
                    return data.name
                    // console.log(this.currentTeam);
                },
                error1 => {

                    console.log(error1);

                },
                );
    }

    goToGame(_id: string) {
        this.router.navigate(['game', _id])
    }
}
