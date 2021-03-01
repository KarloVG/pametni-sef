import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAoeRegionComponent } from './modal-aoe-region.component';

describe('ModalAoeRegionComponent', () => {
  let component: ModalAoeRegionComponent;
  let fixture: ComponentFixture<ModalAoeRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAoeRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAoeRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
