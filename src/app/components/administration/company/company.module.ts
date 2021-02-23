import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyOverviewComponent } from './company-overview/company-overview.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalAoeCompanyComponent } from './modal-aoe-company/modal-aoe-company.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CompanyOverviewComponent, ModalAoeCompanyComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    TranslateModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CompanyOverviewComponent,
        data: {
          title: "Administration",
          breadcrumb: "Company",
          icon: "monitor"
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
export class CompanyModule { }
