import {Component, OnInit} from '@angular/core';
import {FootballService} from '../../shared/services/football/football.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../shared/services/auth/auth.service';
import {League} from '../../shared/dto/league.interface';
import {environment} from '../../../environments/environment';
import {Season} from '../../shared/dto/season.interface';
import {Match} from '../../shared/dto/match.interface';

@Component({
    selector: 'app-league',
    templateUrl: './league.component.html',
    styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
    environmentAPI = environment.API_BASE;
    currentLeague: League;
    currentSeasons: Array<Season>;
    selectedSeasonId: string;
    State: string;
    selectedGames: Array<Match>;
    defaultState = 'finished';


    constructor(private footballService: FootballService,
                private route: ActivatedRoute, private authService: AuthService, private router: Router) {
    }

    ngOnInit(): void {
        this.getLeague(this.route.snapshot.paramMap.get('id'));

    }

    getLeague(id: any): void {
        this.footballService.getLeagueById(id)
            .subscribe(
                data => {
                    // console.log(data);
                    this.currentLeague = data;
                    // console.log(this.currentLeague);
                },
                error1 => {

                    // console.log(error1);

                }, () => {
                    this.footballService.getSeasonsByLeagueId(this.currentLeague._id).subscribe(
                        data => {
                            this.currentSeasons = data;
                        }
                    )

                });

        // this.authService.isLogged();

    }

    updateSelectedGames(selectedSeasonId: string, state: string) {
        this.footballService.getGamesOfLeagueBySeason(selectedSeasonId, state).subscribe(
            data => {
                this.selectedGames = data;
                console.log(this.selectedGames);
            }
        )
    }
    goToGame(_id: string) {
        this.router.navigate(['game', _id]);
    }

}
