import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';

import { MatButtonModule } from "@angular/material/button";
import { HomefooterComponent } from './homefooter/homefooter.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
   
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HomepageComponent,
    HeaderComponent,
    HomefooterComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderComponent,
    HomefooterComponent
  ]
})
export class ComponentsModule { }
