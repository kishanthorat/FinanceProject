import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditManagerRoutingModule } from './credit-manager-routing.module';
import { ViewApplicationFormComponent } from './view-application-form/view-application-form.component';
import { SanctionLetterComponent } from './sanction-letter/sanction-letter.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ViewApplicationFormComponent,
    SanctionLetterComponent,

  ],
  imports: [
    CommonModule,
    CreditManagerRoutingModule,
    MatInputModule,
    ReactiveFormsModule,

    
  ]
})
export class CreditManagerModule { }
