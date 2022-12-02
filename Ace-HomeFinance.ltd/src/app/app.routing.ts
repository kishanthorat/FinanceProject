import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { headerRoutes } from './header/header-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { OperationExecutiveModule } from './module/operation-executive/operation-executive.module';
import { CreditManagerModule } from './module/credit-manager/credit-manager.module';
import { AccountHeadModule } from './module/account-head/account-head.module';
import { LoanOfficerModule } from './module/loan-officer/loan-officer.module';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { TelecallerModule } from './module/telecaller/telecaller.module';

const routes: Routes =[
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { 
    path:'main', component: MainDashboardComponent, children:headerRoutes 
  },
  { 
    path:'main/login' , component:LoginComponent
  },
  {
    path:'role', component :AdminLayoutComponent,
    children:[{
      path:'operational',loadChildren: ()=>OperationExecutiveModule
    },
    {
      path:'creditManager', loadChildren:()=> CreditManagerModule
    },
    {
      path:'accountHead', loadChildren:()=>AccountHeadModule
    },
    {
      path:'loanOfficer',loadChildren:()=>LoanOfficerModule
    },
    {
      path :'teleCaller', loadChildren:()=> TelecallerModule
        }
  ]
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
