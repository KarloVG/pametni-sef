import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EMPTY } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { BankService } from 'src/app/components/administration/bank/services/bank.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-modal-aoe-bank',
  templateUrl: './modal-aoe-bank.component.html',
  styleUrls: ['./modal-aoe-bank.component.scss']
})
export class ModalAoeBankComponent implements OnInit {

  bankGroup: FormGroup;
  @Input() row;

  constructor(
    private _formBuilder: FormBuilder,
    private _modal: NgbActiveModal,
    private _bankService: BankService,
    private _notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.setUpFormGroup();
  }

  setUpFormGroup() {
    if (this.row) {
      this.bankGroup = this._formBuilder.group({
        name: [this.row.name, Validators.required]
      });
    } else {
      this.bankGroup = this._formBuilder.group({
        name: ['', Validators.required]
      });
    }
  }

  onSubmit() {
    if (this.bankGroup.invalid) return;
    if (this.bankGroup.dirty) {
      if (this.row) {
        this._bankService.editBank(this.bankGroup.value).pipe(
          take(1),
          catchError(err => {
            this._notificationService.fireErrorNotification("Greška", err);
            return EMPTY;
          })
        ).subscribe(
          data => {
            this.modalClose(true);
          }
        )
      } else {
        this._bankService.addBank(this.bankGroup.value).pipe(
          take(1),
          catchError(err => {
            this._notificationService.fireErrorNotification("Greška", err);
            return EMPTY;
          })
        ).subscribe(
          data => {
            this.modalClose(true);
          }
        )
      }
    } else {
      this.modalClose('dismiss');
    }
  }

  modalClose(reson): void {
    this._modal.close(reson)
  }

  get name(): AbstractControl {
    return this.bankGroup.get('name');
  }
}
