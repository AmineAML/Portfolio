import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConsoleInterfaceComponent } from './console-interface.component';

describe('ConsoleInterfaceComponent', () => {
  let component: ConsoleInterfaceComponent;
  let fixture: ComponentFixture<ConsoleInterfaceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
