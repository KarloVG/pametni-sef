import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalApoenStructureComponent } from './modal-apoen-structure.component';

describe('ModalApoenStructureComponent', () => {
  let component: ModalApoenStructureComponent;
  let fixture: ComponentFixture<ModalApoenStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalApoenStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalApoenStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
