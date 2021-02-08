import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomizerService } from '../../services/customizer.service';
import { FeatherIconsComponent } from './feather-icons.component';

@NgModule({
  declarations: [
    FeatherIconsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeatherIconsComponent
  ],
  providers: [
    CustomizerService
  ]
})
export class FeatherIconsModule { }

