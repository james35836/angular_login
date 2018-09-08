import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarewellProfileComponent } from './carewell-profile.component';

describe('CarewellProfileComponent', () => {
  let component: CarewellProfileComponent;
  let fixture: ComponentFixture<CarewellProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarewellProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarewellProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
