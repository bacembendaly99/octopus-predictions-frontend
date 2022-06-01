import {League} from './league.interface';

export class Season {
    _id: string;
    name: string;
    league: League;
    winner: string;
    finished: boolean;

}


