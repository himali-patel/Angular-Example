import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgnitingSliderComponent } from './igniting-slider.component';

describe('IgnitingSliderComponent', () => {
  let component: IgnitingSliderComponent;
  let fixture: ComponentFixture<IgnitingSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgnitingSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgnitingSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
