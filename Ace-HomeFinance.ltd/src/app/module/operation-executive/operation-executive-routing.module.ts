import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { OedashboardComponent } from './oedashboard/oedashboard.component';
import { ShowDetailAppComponent } from './show-detail-app/show-detail-app.component';

const operationalRoutes: Routes = [
  {
    path:'oedash' , component: OedashboardComponent
  },
  {
    path:'oeenquiry', component:EnquiryComponent
  },
  {
    path:'appform' , component:ApplicationFormComponent,
    children:[
      {
        path: 'showDetail/:applicationNo', component: ShowDetailAppComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(operationalRoutes)],
  exports: [RouterModule]
})
export class OperationExecutiveRoutingModule { }
