import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAoeApoenComponent } from './modal-aoe-apoen.component';

describe('ModalAoeApoenComponent', () => {
  let component: ModalAoeApoenComponent;
  let fixture: ComponentFixture<ModalAoeApoenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAoeApoenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAoeApoenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
