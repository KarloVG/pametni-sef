import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAoeWebServiceComponent } from './modal-aoe-web-service.component';

describe('ModalAoeWebServiceComponent', () => {
  let component: ModalAoeWebServiceComponent;
  let fixture: ComponentFixture<ModalAoeWebServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAoeWebServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAoeWebServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
