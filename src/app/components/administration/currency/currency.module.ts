import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyOverviewComponent } from './currency-overview/currency-overview.component';
import { CurrencyDetailComponent } from './currency-detail/currency-detail.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalAoeCurrencyComponent } from './modal-aoe-currency/modal-aoe-currency.component';
import { ModalAoeApoenComponent } from './modal-aoe-apoen/modal-aoe-apoen.component';

@NgModule({
  declarations: [CurrencyDetailComponent, CurrencyOverviewComponent, ModalAoeCurrencyComponent, ModalAoeApoenComponent],
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
        component: CurrencyOverviewComponent,
        data:{
          title: "Administration",
          breadcrumb:"Currency",
          icon:"monitor"  //provjeriti
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
export class CurrencyModule { }
