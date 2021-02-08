import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardStepsComponent } from './wizard-steps/wizard-steps.component';
import { RouterModule } from '@angular/router';
import { WizardNavBarComponent } from './wizard-nav-bar/wizard-nav-bar.component';
import { ArchwizardModule } from 'angular-archwizard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FileUploadModule } from 'ng2-file-upload';
import { UploadModule } from './upload-input/upload.module';

@NgModule({
  declarations: [
    WizardStepsComponent,
    WizardNavBarComponent
  ],
  imports: [
    CommonModule,
    ArchwizardModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    UploadModule,
    LeafletModule.forRoot(),
    RouterModule.forChild([
      {
        path: 'prijava',
        component: WizardStepsComponent,
        data: {
          title: "Request",
          breadcrumb: "Wizard for creating",
          icon: "alert-triangle"
        }
      },
      {
        path: '**',
        redirectTo: 'prijava',
        pathMatch: 'full'
      }
    ])
  ]
})
export class ApplicationWizardModule { }
