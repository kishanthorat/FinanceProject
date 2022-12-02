import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaulterListComponent } from './defaulter-list/defaulter-list.component';

const routes: Routes = [
  {
    path : 'defaulter' , component: DefaulterListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelecallerRoutingModule { }
