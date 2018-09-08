import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarewellPlanComponent } from './carewell-plan.component';

describe('CarewellPlanComponent', () => {
  let component: CarewellPlanComponent;
  let fixture: ComponentFixture<CarewellPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarewellPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarewellPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
