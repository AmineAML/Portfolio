import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ToolboxComponent } from './toolbox.component';

describe('ProjectsComponent', () => {
  let component: ToolboxComponent;
  let fixture: ComponentFixture<ToolboxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
