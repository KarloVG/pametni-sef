import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleFullscreenDirective } from "./directives/fullscreen.directive";
import { TranslateModule } from '@ngx-translate/core';
import { DateLocalePipe } from './services/utils/date-locale.pipe';
import { NgxSpinnerModule } from "ngx-spinner";
import { LayoutModule } from './components/layout/layout.module';
import { HeaderModule } from './components/header/header.module';
import { FeatherIconsModule } from './components/feather-icons/feather-icons.module';
import { ConfirmationModalModule } from './components/confirmation-modal/confirmation-modal.module';
import { BreadcrumbModule } from './components/breadcrumb/breadcrumb.module';
import { FooterModule } from './components/footer/footer.module';
import { SidebarModule } from './components/sidebar/sidebar.module';

@NgModule({
  declarations: [
    ToggleFullscreenDirective,
    DateLocalePipe
  ],
  imports: [
    NgxSpinnerModule,
    CommonModule,
    LayoutModule,
    HeaderModule,
    FooterModule,
    FeatherIconsModule,
    SidebarModule,
    ConfirmationModalModule,
    BreadcrumbModule,
    TranslateModule
  ],
  exports: [
    DateLocalePipe,
    ConfirmationModalModule,
    FeatherIconsModule
  ]
})
export class SharedModule { }

