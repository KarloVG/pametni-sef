import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationOverviewComponent } from './location-overview/location-overview.component';
import { ModalAoeLocationComponent } from './modal-aoe-location/modal-aoe-location.component';

@NgModule({
  declarations: [LocationOverviewComponent, ModalAoeLocationComponent],
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
        component: LocationOverviewComponent,
        data: {
          title: "Administration",
          breadcrumb: "Location",
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
export class LocationModule { }
