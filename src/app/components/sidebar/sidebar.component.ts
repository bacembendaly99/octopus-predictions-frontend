import { Component, OnInit } from '@angular/core';
import {FootballService} from '../../shared/services/football/football.service';
import {error} from 'protractor';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;
  constructor(private footballService: FootballService) { }

  ngOnInit(): void {
    this.footballService.getALLCountries().subscribe(
        data => {
          console.log(data)
        },
        error1 => {
          console.log(error1)
        }
    )
  }

}
