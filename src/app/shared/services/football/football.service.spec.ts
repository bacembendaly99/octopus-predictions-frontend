import { TestBed } from '@angular/core/testing';

import { FootballService } from './football.service';

describe('FootballService', () => {
  let service: FootballService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
