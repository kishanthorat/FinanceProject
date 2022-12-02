import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationExecutiveRoutingModule } from './operation-executive-routing.module';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { OedashboardComponent } from './oedashboard/oedashboard.component';
import { ShowDetailAppComponent } from './show-detail-app/show-detail-app.component';


@NgModule({
  declarations: [
    EnquiryComponent,
    ApplicationFormComponent,
    OedashboardComponent,
    ShowDetailAppComponent
  ],
  imports: [
    CommonModule,
    OperationExecutiveRoutingModule
  ]
})
export class OperationExecutiveModule { }
