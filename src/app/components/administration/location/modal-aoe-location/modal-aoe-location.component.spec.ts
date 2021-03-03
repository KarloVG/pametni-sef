import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAoeLocationComponent } from './modal-aoe-location.component';

describe('ModalAoeLocationComponent', () => {
  let component: ModalAoeLocationComponent;
  let fixture: ComponentFixture<ModalAoeLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAoeLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAoeLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
