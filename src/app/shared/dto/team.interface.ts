export class Team {

    _id: string;
    name: string;
    sport: string;
    countryName: string;
    logoId: string;
    flagId: string;
    constructor(id?: string, name?: string, sport?: string, countryName?: string, logoId?: string, flagId?: string) {
        this._id = id || '';
        this.name = name || '';
        this.sport = sport || '';
        this.countryName = countryName || '';
        this.logoId = logoId || '';
        this.flagId = flagId || '';
    }

}
