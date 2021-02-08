import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FeatherIconsModule } from '../feather-icons/feather-icons.module';
import { TranslateModule } from '@ngx-translate/core';
import { NavService } from '../../services/nav.service';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FeatherIconsModule,
    TranslateModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    NavService
  ]
})
export class HeaderModule { }

