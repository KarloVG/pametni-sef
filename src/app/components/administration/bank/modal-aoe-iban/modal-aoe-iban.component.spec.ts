import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAoeIbanComponent } from './modal-aoe-iban.component';

describe('ModalAoeIbanComponent', () => {
  let component: ModalAoeIbanComponent;
  let fixture: ComponentFixture<ModalAoeIbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAoeIbanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAoeIbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
