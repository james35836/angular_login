import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarewellLayoutComponent } from './carewell-layout.component';

describe('CarewellLayoutComponent', () => {
  let component: CarewellLayoutComponent;
  let fixture: ComponentFixture<CarewellLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarewellLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarewellLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
