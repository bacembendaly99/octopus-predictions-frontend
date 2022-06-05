import {HomeComponent} from './home.component';
import {ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FootballService} from '../../shared/services/football/football.service';


describe('TeamComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let footballService: FootballService;
    let httpTestingController: HttpTestingController;
    const sports = [
        {
            _id: '6250937f0e2a474cdaf1aa63',
            name: 'tennis',
            createdAt: '2022-04-08T19:56:47.252Z',
            updatedAt: '2022-04-08T19:56:47.252Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa64',
            name: 'basketball',
            createdAt: '2022-04-08T19:56:47.254Z',
            updatedAt: '2022-04-08T19:56:47.254Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa65',
            name: 'hockey',
            createdAt: '2022-04-08T19:56:47.254Z',
            updatedAt: '2022-04-08T19:56:47.254Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa67',
            name: 'baseball',
            createdAt: '2022-04-08T19:56:47.255Z',
            updatedAt: '2022-04-08T19:56:47.255Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa66',
            name: 'golf',
            createdAt: '2022-04-08T19:56:47.254Z',
            updatedAt: '2022-04-08T19:56:47.254Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa68',
            name: 'snooker',
            createdAt: '2022-04-08T19:56:47.255Z',
            updatedAt: '2022-04-08T19:56:47.255Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa69',
            name: 'american-football',
            createdAt: '2022-04-08T19:56:47.256Z',
            updatedAt: '2022-04-08T19:56:47.256Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa6a',
            name: 'aussie-rules',
            createdAt: '2022-04-08T19:56:47.256Z',
            updatedAt: '2022-04-08T19:56:47.256Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa6b',
            name: 'badminton',
            createdAt: '2022-04-08T19:56:47.257Z',
            updatedAt: '2022-04-08T19:56:47.257Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa6c',
            name: 'bandy',
            createdAt: '2022-04-08T19:56:47.257Z',
            updatedAt: '2022-04-08T19:56:47.257Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa6f',
            name: 'beach-soccer',
            createdAt: '2022-04-08T19:56:47.258Z',
            updatedAt: '2022-04-08T19:56:47.258Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa70',
            name: 'beach-volleyball',
            createdAt: '2022-04-08T19:56:47.258Z',
            updatedAt: '2022-04-08T19:56:47.258Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa71',
            name: 'boxing',
            createdAt: '2022-04-08T19:56:47.259Z',
            updatedAt: '2022-04-08T19:56:47.259Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa72',
            name: 'cricket',
            createdAt: '2022-04-08T19:56:47.259Z',
            updatedAt: '2022-04-08T19:56:47.259Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa73',
            name: 'cycling',
            createdAt: '2022-04-08T19:56:47.259Z',
            updatedAt: '2022-04-08T19:56:47.259Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa74',
            name: 'darts',
            createdAt: '2022-04-08T19:56:47.260Z',
            updatedAt: '2022-04-08T19:56:47.260Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa75',
            name: 'esports',
            createdAt: '2022-04-08T19:56:47.260Z',
            updatedAt: '2022-04-08T19:56:47.260Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa76',
            name: 'field-hockey',
            createdAt: '2022-04-08T19:56:47.260Z',
            updatedAt: '2022-04-08T19:56:47.260Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa77',
            name: 'floorball',
            createdAt: '2022-04-08T19:56:47.261Z',
            updatedAt: '2022-04-08T19:56:47.261Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa78',
            name: 'football',
            createdAt: '2022-04-08T19:56:47.261Z',
            updatedAt: '2022-04-08T19:56:47.261Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa79',
            name: 'futsal',
            createdAt: '2022-04-08T19:56:47.261Z',
            updatedAt: '2022-04-08T19:56:47.261Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa7b',
            name: 'handball',
            createdAt: '2022-04-08T19:56:47.262Z',
            updatedAt: '2022-04-08T19:56:47.262Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa7d',
            name: 'horse-racing',
            createdAt: '2022-04-08T19:56:47.262Z',
            updatedAt: '2022-04-08T19:56:47.262Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa7e',
            name: 'kabaddi',
            createdAt: '2022-04-08T19:56:47.262Z',
            updatedAt: '2022-04-08T19:56:47.262Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa7f',
            name: 'mma',
            createdAt: '2022-04-08T19:56:47.263Z',
            updatedAt: '2022-04-08T19:56:47.263Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa80',
            name: 'motorsport',
            createdAt: '2022-04-08T19:56:47.263Z',
            updatedAt: '2022-04-08T19:56:47.263Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa81',
            name: 'netball',
            createdAt: '2022-04-08T19:56:47.264Z',
            updatedAt: '2022-04-08T19:56:47.264Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa82',
            name: 'pesapallo',
            createdAt: '2022-04-08T19:56:47.264Z',
            updatedAt: '2022-04-08T19:56:47.264Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa83',
            name: 'rugby-league',
            createdAt: '2022-04-08T19:56:47.264Z',
            updatedAt: '2022-04-08T19:56:47.264Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa84',
            name: 'rugby-union',
            createdAt: '2022-04-08T19:56:47.265Z',
            updatedAt: '2022-04-08T19:56:47.265Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa86',
            name: 'table-tennis',
            createdAt: '2022-04-08T19:56:47.265Z',
            updatedAt: '2022-04-08T19:56:47.265Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa88',
            name: 'volleyball',
            createdAt: '2022-04-08T19:56:47.266Z',
            updatedAt: '2022-04-08T19:56:47.266Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa89',
            name: 'water-polo',
            createdAt: '2022-04-08T19:56:47.266Z',
            updatedAt: '2022-04-08T19:56:47.266Z',
            __v: 0
        },
        {
            _id: '6250937f0e2a474cdaf1aa8a',
            name: 'winter-sports',
            createdAt: '2022-04-08T19:56:47.266Z',
            updatedAt: '2022-04-08T19:56:47.266Z',
            __v: 0
        }
    ]

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([]),
                HttpClientTestingModule,
                RouterTestingModule],
            providers: [FootballService],
            declarations: [HomeComponent],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should get sports on  init', fakeAsync((() => {
        fixture.detectChanges();
        component.ngOnInit();
        tick();
        fixture.detectChanges();
        expect(component.sports).toEqual([]);
    })));
    it('creates', () => {
        expect(footballService).toBeTruthy();
    });

    afterEach(() => {
        // ensure all http calls are dealt with (none in queue)
        httpTestingController.verify();
    });

    it('should call success method on success response', () => {
        const successSpy = spyOn(footballService, 'getAllLeaguesByCountry');
        // 2nd argument is the body
        footballService.getAllLeaguesByCountry();

        const request = httpTestingController.expectOne('http://localhost:3500/football/leagues');
        expect(request.request.method).toBe('Get');
        expect(successSpy).toHaveBeenCalled();
    });
});

