import {Country} from './team.interface';

export class League {
    _id: string;
    name: string;
    logo: string;
    country: Country;
}

export class LeagueGroup {
    country: Country;
    leagues: [League];
}
