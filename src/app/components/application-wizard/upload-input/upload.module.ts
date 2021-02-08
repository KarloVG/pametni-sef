import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { UploadInputComponent } from './upload-input.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    UploadInputComponent
  ],
  imports: [
    CommonModule,
    FileUploadModule,
    TranslateModule,
    NgbModule
  ],
  exports: [
    UploadInputComponent
  ]
})
export class UploadModule { }
