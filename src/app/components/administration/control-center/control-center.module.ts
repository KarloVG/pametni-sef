import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlCenterOverviewComponent } from './control-center-overview/control-center-overview.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ControlCenterDetailComponent } from './control-center-detail/control-center-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ControlCenterOverviewComponent, ControlCenterDetailComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
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
  // providers: [ControlCenterService]
})
export class ControlCenterModule { }
