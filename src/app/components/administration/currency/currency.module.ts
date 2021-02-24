import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyOverviewComponent } from './currency-overview/currency-overview.component';
import { CurrencyDetailComponent } from './currency-detail/currency-detail.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalApoenStructureComponent } from './modal-apoen-structure/modal-apoen-structure.component';



@NgModule({
  declarations: [CurrencyDetailComponent, CurrencyOverviewComponent, ModalApoenStructureComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
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
