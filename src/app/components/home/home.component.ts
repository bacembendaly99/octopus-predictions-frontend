import {Component, OnInit} from '@angular/core';
import {FootballService} from '../../shared/services/football/football.service';
import {Sport} from '../../shared/dto/sport.interface';
import {element} from 'protractor';
import {LeagueGroup} from '../../shared/dto/league.interface';
import {Match} from '../../shared/dto/match.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    environmentAPI = environment.API_BASE;
    sports = Array<Sport>();
    leaguesGroups = Array<LeagueGroup>();
    selectedLeagueId = '0';
    selectedGames = Array<Match>();
    private selectedLeagueName: string;

    constructor(private footballService: FootballService, private router: Router) {
    }


    ngOnInit(): void {
        this.footballService.getSports().subscribe(
            data => {
                this.sports = data;
                // this.sports = this.sports.filter(sport => sport.name !== 'tennis');
                this.sports = this.sports.filter(sport => !['tennis', 'football', 'basketball', 'hockey', 'baseball', 'golf', 'volleyball', 'cycling'].includes(sport.name));

                // console.log(this.sports);
            },
        )
        this.footballService.getAllLeaguesByCountry().subscribe(
            data => {
                this.leaguesGroups = data;
                // console.log(this.leaguesGroups);
            }
        )
    }

    //
    // isDisplayed(name) {
    //     return (name !== 'football');
    // }

    changeLeague(_id: string, name: string) {
        this.selectedLeagueName = name;
        // console.log(this.selectedLeagueName);
        this.selectedLeagueId = _id;
        this.footballService.getGamesFinishedByLeagueId(_id).subscribe(
            data => {
                this.selectedGames = data;
                // console.log(this.selectedGames);
            }
        )

    }

    goToGame(_id: string) {
        this.router.navigate(['game', _id]);
    }

    GoToLeague(_id: string) {
        // console.log(_id);
        this.router.navigate(['league', _id]);

    }
}
