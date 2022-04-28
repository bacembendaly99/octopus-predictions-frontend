import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarnavComponent } from './barnav.component';

describe('BarnavComponent', () => {
  let component: BarnavComponent;
  let fixture: ComponentFixture<BarnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
