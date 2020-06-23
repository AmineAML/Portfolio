import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollTopIndicatorComponent } from './scroll-top-indicator.component';

describe('ScrollTopIndicatorComponent', () => {
  let component: ScrollTopIndicatorComponent;
  let fixture: ComponentFixture<ScrollTopIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollTopIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollTopIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
