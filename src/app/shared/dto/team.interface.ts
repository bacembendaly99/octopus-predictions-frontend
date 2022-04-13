export class Team {

    id: string;
    name: string;
    sport: string;
    countryName: string;
    logoId: string;
    flagId: string;
    constructor(id?: string, name?: string, sport?: string, countryName?: string, logoId?: string, flagId?: string) {
        this.id = id || '';
        this.name = name || '';
        this.sport = sport || '';
        this.countryName = countryName || '';
        this.logoId = logoId || '';
        this.flagId = flagId || '';
    }

}
