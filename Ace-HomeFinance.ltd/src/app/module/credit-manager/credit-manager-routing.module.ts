import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanctionLetterComponent } from './sanction-letter/sanction-letter.component';

import { ViewApplicationFormComponent } from './view-application-form/view-application-form.component';

const routes: Routes = [
  {
    path:'view',  component : ViewApplicationFormComponent,
    children:[
      {
        path: 'sanction/:applicationNo', component: SanctionLetterComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditManagerRoutingModule { }
