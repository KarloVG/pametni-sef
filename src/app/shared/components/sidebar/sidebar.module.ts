import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FeatherIconsModule } from '../feather-icons/feather-icons.module';
import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    FeatherIconsModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }

