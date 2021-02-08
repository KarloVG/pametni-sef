import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { CustomizerComponent } from './customizer/customizer.component';
import { CustomizerService } from '../../services/customizer.service';
import { TranslateModule } from '@ngx-translate/core';
import { FooterModule } from '../footer/footer.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { HeaderModule } from '../header/header.module';
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { RouterModule } from '@angular/router';
import { NavService } from '../../services/nav.service';

@NgModule({
  declarations: [
    ContentLayoutComponent,
    CustomizerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    HeaderModule,
    FooterModule,
    BreadcrumbModule,
    SidebarModule
  ],
  exports: [
    ContentLayoutComponent,
    CustomizerComponent
  ],
  providers: [
    CustomizerService,
    NavService
  ]
})
export class LayoutModule { }

