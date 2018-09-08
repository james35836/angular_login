import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarewellDashboardComponent } from './carewell-dashboard.component';

describe('CarewellDashboardComponent', () => {
  let component: CarewellDashboardComponent;
  let fixture: ComponentFixture<CarewellDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarewellDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarewellDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
