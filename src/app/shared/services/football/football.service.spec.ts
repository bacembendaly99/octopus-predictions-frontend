import {TestBed} from '@angular/core/testing';

import {FootballService} from './football.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TeamComponent} from '../../../components/team/team.component';
import {Match} from '../../dto/match.interface';
import {Team} from '../../dto/team.interface';

describe('FootballService', () => {
    let service: FootballService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [],
            declarations: [TeamComponent],
        });
        service = TestBed.inject(FootballService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('calculates the score', () => {
        const homeTeam = {
            '_id': '625319dda0b8f321acbb3137',
            'name': 'real-madrid',
            'sport': {
                '_id': '6250937f0e2a474cdaf1aa78',
                'name': 'football',
                'createdAt': '2022-04-08T19:56:47.261Z',
                'updatedAt': '2022-04-08T19:56:47.261Z',
                '__v': 0
            },
            'country': {
                '_id': '6250b71843a316736fa108ee',
                'name': 'spain',
                'createdAt': '2022-04-08T22:28:40.098Z',
                'updatedAt': '2022-04-12T13:11:10.976Z',
                '__v': 0,
                'flag': '62557a6e7d9ef809700bd5f5'
            },
            'logo': '625319dca0b8f321acbb3134'
        }
        const game = {
            '_id': '6262ae3f12af85ee838ada22',
            'round': 'Play Offs - Quarter-finals',
            'date': '2021-04-06T19:00:00.000Z',
            'homeTeam': {
                '_id': '625319dda0b8f321acbb3137',
                'name': 'real-madrid',
                'sport': '6250937f0e2a474cdaf1aa78',
                'country': '6250b71843a316736fa108ee',
                'logo': '625319dca0b8f321acbb3134',
                'flashscoreId': 'W8mj7MDD',
                'createdAt': '2022-04-10T17:54:37.153Z',
                'updatedAt': '2022-04-10T17:54:37.153Z',
                '__v': 0
            },
            'awayTeam': {
                '_id': '6252ec78197787b047f23f47',
                'name': 'liverpool',
                'sport': '6250937f0e2a474cdaf1aa78',
                'country': '6250b70c43a316736fa107c5',
                'logo': '6252ec77197787b047f23f44',
                'flashscoreId': 'lId4TMwf',
                'createdAt': '2022-04-10T14:40:56.404Z',
                'updatedAt': '2022-04-10T14:40:56.404Z',
                '__v': 0
            },
            'season': {
                '_id': '625c9c1a1de5108294569b25',
                'name': 'champions-league-2020-2021',
                'league': {
                    '_id': '6250d81381afe4381753ae16',
                    'name': 'champions-league',
                    'createdAt': '2022-04-09T00:49:23.758Z',
                    'updatedAt': '2022-04-22T13:21:47.160Z',
                    'country': '6250b71a43a316736fa10948',
                    'sport': '6250937f0e2a474cdaf1aa78',
                    '__v': 0,
                    'logo': '6262abea12af85ee838ad0aa'
                },
                'winner': '6252ec79197787b047f23f4f',
                'finished': true,
                'createdAt': '2022-04-17T23:00:42.655Z',
                'updatedAt': '2022-04-17T23:00:42.655Z',
                '__v': 0
            },
            'finished': true,
            'goals': [
                {
                    'time': '27',
                    'homeTeam': true,
                    '_id': '6262ae3f12af85ee838ada23'
                },
                {
                    'time': '36',
                    'homeTeam': true,
                    '_id': '6262ae3f12af85ee838ada24'
                },
                {
                    'time': '51',
                    'homeTeam': false,
                    '_id': '6262ae3f12af85ee838ada25'
                },
                {
                    'time': '65',
                    'homeTeam': true,
                    '_id': '6262ae3f12af85ee838ada26'
                }
            ]
        }
        const result = {
            score: '3 - 1',
            result: 1
        }
        expect(service.calculateScoreByMatch(game as unknown as Match, homeTeam as Team)).toEqual(result);
    })
});
