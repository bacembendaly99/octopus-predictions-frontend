import {Component, OnInit} from '@angular/core';
import {FootballService} from '../../shared/services/football/football.service';
import {Sport} from '../../shared/dto/sport.interface';
import {element} from 'protractor';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    sports = Array<Sport>();

    constructor(private footballService: FootballService) {
    }


    ngOnInit(): void {
        this.footballService.getSports().subscribe(
            data => {
                this.sports = data;
                // this.sports = this.sports.filter(sport => sport.name !== 'tennis');
                this.sports = this.sports.filter(sport => !['tennis', 'football', 'basketball', 'hockey', 'baseball', 'golf', 'volleyball', 'cycling'].includes(sport.name));

                console.log(this.sports);
            },
        )
    }

    //
    // isDisplayed(name) {
    //     return (name !== 'football');
    // }

}
