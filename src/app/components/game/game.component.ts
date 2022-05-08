import {Component, OnInit} from '@angular/core';
import {FootballService} from '../../shared/services/football/football.service';
import {ActivatedRoute} from '@angular/router';
import {Team} from '../../shared/dto/team.interface';
import {Match} from '../../shared/dto/match.interface';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    private currentMatch: Match;
    private currentHomeTeam: Team;
    private currentAwayTeam: Team;
    environmentAPI = environment.API_BASE;


    constructor(private footballService: FootballService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.getMatch(this.route.snapshot.paramMap.get('id'));
        // console.log('game', this.currentMatch);
    }

    private getMatch(id: string) {
        this.footballService.getMatchById(id)
            .subscribe(
                data => {
                    // console.log(data);
                    this.currentMatch = data
                    // console.log(this.currentMatch);
                },
                error1 => {

                    console.log(error1);

                }, () => {
                    this.getTeams(this.currentMatch.homeTeam, this.currentMatch.awayTeam);
                });
    }

    getTeams(homeId, awayId): void {
        this.footballService.getTeam(homeId)
            .subscribe(
                data => {
                    // console.log(data);
                    this.currentHomeTeam = data;
                },
                error1 => {

                    console.log(error1);

                });
        this.footballService.getTeam(awayId)
            .subscribe(
                data => {
                    // console.log(data);
                    this.currentAwayTeam = data;
                    console.log(this.currentAwayTeam);
                },
                error1 => {

                    console.log(error1);

                });


    }
}
