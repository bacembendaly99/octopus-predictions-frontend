import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor(private router: Router) { }

  ngOnInit() {}

    goToRegister() {
        this.router.navigate(['register']);
    }

    goToHome() {
        this.router.navigate(['home']);
    }
}
