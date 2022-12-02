import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ConstructionLoanComponent } from './products/construction-loan/construction-loan.component';
import { ExtensionHomeLoanComponent } from './products/extension-home-loan/extension-home-loan.component';
import { RenovationHomeLoanComponent } from './products/renovation-home-loan/renovation-home-loan.component';
import { RuralHomeLoanComponent } from './products/rural-home-loan/rural-home-loan.component';
import { AboutusComponent } from './main/aboutus/aboutus.component';
import { FaqsComponent } from './main/faqs/faqs.component';
import { EmiCalculatorComponent } from './main/emi-calculator/emi-calculator.component';
import { OperationExecutiveModule } from './module/operation-executive/operation-executive.module';
import { LoanOfficerModule } from './module/loan-officer/loan-officer.module';
import { AccountHeadModule } from './module/account-head/account-head.module';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { SectionDirective } from './directive/section.directive';
import {MatSliderModule} from '@angular/material/slider';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,OperationExecutiveModule,
    LoanOfficerModule,
    AccountHeadModule,
    MatSliderModule,
    MatButtonModule
  
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    EnquiryComponent,
    ConstructionLoanComponent,
    ExtensionHomeLoanComponent,
    RenovationHomeLoanComponent,
    RuralHomeLoanComponent,
    AboutusComponent,
    FaqsComponent,
    EmiCalculatorComponent,
    MainDashboardComponent,
    SectionDirective,
    jqxChartComponent 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
