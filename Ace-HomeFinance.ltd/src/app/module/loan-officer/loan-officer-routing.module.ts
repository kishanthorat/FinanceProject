import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { EnquiryListComponent } from './enquiry-list/enquiry-list.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';

const routes: Routes = [
  {
    path:'loenquiry', component: EnquiryListComponent
  },
  {
    path:'customers', component: CustomerlistComponent
  },
  {
    path: 'loanapp', component: LoanApplicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanOfficerRoutingModule { }
