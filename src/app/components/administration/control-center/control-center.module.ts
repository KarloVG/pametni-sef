import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlCenterOverviewComponent } from './control-center-overview/control-center-overview.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalAoeControlCenterComponent } from './modal-aoe-control-center/modal-aoe-control-center.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ControlCenterOverviewComponent, ModalAoeControlCenterComponent],
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
        component: ControlCenterOverviewComponent,
        data: {
          title: "Administration",
          breadcrumb: "Control Center",
          icon: "monitor"
        }
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ])
  ],
  providers: []
})
export class ControlCenterModule { }
