import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankOverviewComponent } from './bank-overview/bank-overview.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ModalAoeIbanComponent } from './modal-aoe-iban/modal-aoe-iban.component';

@NgModule({
  declarations: [BankOverviewComponent, ModalAoeIbanComponent],
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
