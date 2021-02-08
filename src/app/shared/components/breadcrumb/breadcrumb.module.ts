import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { FeatherIconsModule } from '../feather-icons/feather-icons.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FeatherIconsModule
  ],
  exports: [
    BreadcrumbComponent
  ]
})
export class BreadcrumbModule { }

