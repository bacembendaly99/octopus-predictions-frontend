import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TeamComponent} from './team.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';


describe('TeamComponent', () => {
    let component: TeamComponent;
    let fixture: ComponentFixture<TeamComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([]),
                HttpClientTestingModule,
                RouterTestingModule],
            providers: [],
            declarations: [TeamComponent],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TeamComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });



    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('testing name', () => {
        expect(component.componentName).toBe('Team');
    });

    it('should navigate', () => {
        let router: Router;
        router = TestBed.inject(Router);
        const navigateSpy = spyOn(router, 'navigate');
        component.goToGame('0');
        expect(navigateSpy).toHaveBeenCalledWith(['game', '0']);
    });
});
