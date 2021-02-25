import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankOverviewComponent } from './bank-overview/bank-overview.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ModalAoeIbanComponent } from './modal-aoe-iban/modal-aoe-iban.component';
import { ModalCumulativeOrderComponent } from './modal-cumulative-order/modal-cumulative-order.component';

@NgModule({
  declarations: [BankOverviewComponent, ModalAoeIbanComponent, ModalCumulativeOrderComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild([
      {
        path: '',
        component: BankOverviewComponent,
        data: {
          title: "Administration",
          breadcrumb: "Bank",
          icon: "briefcase"
        }
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ])
  ]
})
export class BankModule { }
