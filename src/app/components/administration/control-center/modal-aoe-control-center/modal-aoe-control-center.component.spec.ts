import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAoeControlCenterComponent } from './modal-aoe-control-center.component';

describe('ModalAoeControlCenterComponent', () => {
  let component: ModalAoeControlCenterComponent;
  let fixture: ComponentFixture<ModalAoeControlCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAoeControlCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAoeControlCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
