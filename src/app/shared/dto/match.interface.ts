import {Team} from './team.interface';
import {Season} from './season.interface';


export class Match {
    _id: string;
    round: string;
    date:  string;
    homeTeam: Team;
    awayTeam: Team;
    season: Season;
    finished: boolean;
    goals: [Goal];
    // constructor(id?: string, round?: string, date?: string, homeTeam?: Team, awayTeam?: Team, season?: string, finished?: boolean, goals?: [Goal]) {
    //     this._id = id || '';
    //     this.date = date || '';
    //     this.round = round || '';
    //     this.homeTeam = homeTeam ;
    //     this.awayTeam = awayTeam || '';
    //     this.flagId = flagId || '';
    // }
}


export class Goal {
    _id: string;
    time: string;
    homeTeam: boolean;
}


export class Score {
    score: string;
    result: number;
}
