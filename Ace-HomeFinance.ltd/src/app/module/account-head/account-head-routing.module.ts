import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmiListComponent } from './emi-list/emi-list.component';
import { ForwardedSanctionListComponent } from './forwarded-sanction-list/forwarded-sanction-list.component';
import { LedgerListComponent } from './ledger-list/ledger-list.component';
import { LoanDisburseListComponent } from './loan-disburse-list/loan-disburse-list.component';
import { LoanDisburseComponent } from './loan-disburse/loan-disburse.component';

const routes: Routes = [
  {
    path: 'sanctioned' , component: ForwardedSanctionListComponent,
    children : 
    [
      {
        path :'disburse/:applicationNo' , component : LoanDisburseComponent
      }
    ]
  },
  {
    path:'disburselist', component : LoanDisburseListComponent, 
    children:[
      {
        path : 'ledger', component : LedgerListComponent
      },
      {
        path:'emi-list/:applicationNo', component:EmiListComponent
      }
    
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountHeadRoutingModule { }
