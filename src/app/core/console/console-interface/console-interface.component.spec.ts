import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleInterfaceComponent } from './console-interface.component';

describe('ConsoleInterfaceComponent', () => {
  let component: ConsoleInterfaceComponent;
  let fixture: ComponentFixture<ConsoleInterfaceComponent>;

  beforeEach(async(() => {
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
