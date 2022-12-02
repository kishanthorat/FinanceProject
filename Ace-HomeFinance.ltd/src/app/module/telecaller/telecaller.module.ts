import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelecallerRoutingModule } from './telecaller-routing.module';
import { DefaulterListComponent } from './defaulter-list/defaulter-list.component';


@NgModule({
  declarations: [
    DefaulterListComponent
  ],
  imports: [
    CommonModule,
    TelecallerRoutingModule
  ]
})
export class TelecallerModule { }
