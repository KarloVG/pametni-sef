import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { MapOverviewComponent } from './map-overview/map-overview.component';
import { RouterModule } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [MapOverviewComponent],
  imports: [
    CommonModule,
    TranslateModule,
    LeafletModule.forRoot(),
    GalleryModule.forRoot(),
    NgbModule,
    // Malo ruta pa nema potrebe za novim file-om
    RouterModule.forChild([
      {
        path: 'pregled',
        component: MapOverviewComponent,
        data: {
          title: "Map",
          breadcrumb: "Location Overview",
          icon: "map"
        }
      },
      {
        path: '**',
        redirectTo: 'pregled',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    TitleCasePipe
  ]
})
export class MapModule { }
