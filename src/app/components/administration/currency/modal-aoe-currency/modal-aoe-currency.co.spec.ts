import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAoeCurrencyComponent } from './modal-aoe-currency.component';

describe('ModalAoeCurrencyApoenComponent', () => {
  let component: ModalAoeCurrencyComponent;
  let fixture: ComponentFixture<ModalAoeCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAoeCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAoeCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
