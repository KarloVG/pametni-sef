import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCumulativeOrderComponent } from './modal-cumulative-order.component';

describe('ModalCumulativeOrderComponent', () => {
  let component: ModalCumulativeOrderComponent;
  let fixture: ComponentFixture<ModalCumulativeOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCumulativeOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCumulativeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
