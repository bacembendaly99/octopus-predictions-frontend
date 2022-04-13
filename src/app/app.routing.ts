import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';

import { LandingComponent } from './components/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import {RegisterComponent} from './components/register/register.component';
import {TeamComponent} from './components/team/team.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'home',             component: HomeComponent },
    { path: 'team/:id',     component: TeamComponent  },
    { path: 'register',           component: RegisterComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes
    )
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
