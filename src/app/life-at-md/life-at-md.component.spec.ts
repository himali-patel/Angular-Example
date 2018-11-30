import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeAtMdComponent } from './life-at-md.component';

describe('LifeAtMdComponent', () => {
  let component: LifeAtMdComponent;
  let fixture: ComponentFixture<LifeAtMdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeAtMdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeAtMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
