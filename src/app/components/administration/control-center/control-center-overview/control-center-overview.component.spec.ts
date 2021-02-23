import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCenterOverviewComponent } from './control-center-overview.component';

describe('ControlCenterOverviewComponent', () => {
  let component: ControlCenterOverviewComponent;
  let fixture: ComponentFixture<ControlCenterOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlCenterOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlCenterOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
