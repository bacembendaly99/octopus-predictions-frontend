import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Team} from '../../dto/team.interface';
import {League, LeagueGroup} from '../../dto/league.interface';
import {Goal, Match, Score} from '../../dto/match.interface';
import {Sport} from '../../dto/sport.interface';
import {filter, map} from 'rxjs/operators';
import {Prediction} from '../../dto/prediction.interface';

// const FootUrl = 'http://localhost:3000/football/'
@Injectable({
    providedIn: 'root'
})
export class FootballService {

    constructor(private http: HttpClient) {
    }

    getTeam(id: any): Observable<any> {
        return this.http.get<Team>(`${environment.API_BASE}football/team/${id}`);
    }

    getALLCountries(): Observable<any> {
        return this.http.get(environment.API_BASE + 'football/countries');
    }


    getLeaguesByTeamId(id): Observable<any> {
        return this.http.get(`${environment.API_BASE}football/leagues/${id}`);
    }

    getSeasonsByLeagueId(id): Observable<any> {
        return this.http.get(`${environment.API_BASE}football/${id}/season`);
    }

    getMatchesByTeamSeason(teamId, seasonId): Observable<any> {
        return this.http.get(`${environment.API_BASE}football/${seasonId}/matches/${teamId}`);
    }

    calculateScoreByMatch(game: Match, homeTeam: Team): Score {
        let homeScore = 0;
        let awayScore = 0;
        let result = 0;
        for (const goal of game.goals) {
            if (goal.homeTeam === true) {
                homeScore += 1;
            } else {
                awayScore += 1;
            }
        }
        if (game.homeTeam._id === homeTeam._id) {
            if (homeScore > awayScore) {
                result = 1;
            }
            if (homeScore < awayScore) {
                result = 2;
            }
        } else {
            if (homeScore < awayScore) {
                result = 1;
            }
            if (homeScore > awayScore) {
                result = 2;
            }
        }
        return ({
            score: (homeScore + ' - ' + awayScore),
            result: result
        })
    }

    getMatchById(id) {
        return this.http.get<Match>(`${environment.API_BASE}football/match/${id}`);

    }

    getSports() {
        return this.http.get<Array<Sport>>(`${environment.API_BASE}sports`);
        // .pipe(
        // ;
    }

    getAllLeaguesByCountry() {
        return this.http.get<Array<LeagueGroup>>(`${environment.API_BASE}football/countriesleagues`);
    }

    getGamesFinishedByLeagueId(_id) {
        return this.http.get<Array<Match>>(`${environment.API_BASE}football/${_id}/finished/matches`);
    }

    getLeagueById(id) {
        return this.http.get<League>(`${environment.API_BASE}football/league/${id}`);

    }

    getGamesOfLeagueBySeason(id, state) {
        return this.http.get<Array<Match>>(`${environment.API_BASE}football/${id}/matches/${state}`);
    }


    getPrediction() {
        return this.http.post<Prediction>(`${environment.PREDICTION_API}`, {
            params: {
                'leagueId': '6250d82b81afe4381753aefa',
                'homeTeam': 'tunisia',
                'awayTeam': 'france',
                'date': '2022-11-30T15:00:00.000Z'
            }
        });

    }
}


// leagueId, homeTeamName, awayTeamName, date
