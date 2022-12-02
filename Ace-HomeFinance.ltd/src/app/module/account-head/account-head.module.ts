import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountHeadRoutingModule } from './account-head-routing.module';
import { ForwardedSanctionListComponent } from './forwarded-sanction-list/forwarded-sanction-list.component';
import { LoanDisburseComponent } from './loan-disburse/loan-disburse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanDisburseListComponent } from './loan-disburse-list/loan-disburse-list.component';
import { LedgerListComponent } from './ledger-list/ledger-list.component';
import { EmiListComponent } from './emi-list/emi-list.component';


@NgModule({
  declarations: [
    ForwardedSanctionListComponent,
    LoanDisburseComponent,
    LoanDisburseListComponent,
    LedgerListComponent,
    EmiListComponent
  ],
  imports: [
    CommonModule,
    AccountHeadRoutingModule,
    ReactiveFormsModule,FormsModule
  ]
})
export class AccountHeadModule { }
