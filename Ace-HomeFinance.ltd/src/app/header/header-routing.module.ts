import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from 'app/components/homepage/homepage.component';
import { EnquiryComponent } from 'app/enquiry/enquiry.component';
import { AboutusComponent } from 'app/main/aboutus/aboutus.component';
import { EmiCalculatorComponent } from 'app/main/emi-calculator/emi-calculator.component';
import { FaqsComponent } from 'app/main/faqs/faqs.component';
import { ConstructionLoanComponent } from 'app/products/construction-loan/construction-loan.component';
import { ExtensionHomeLoanComponent } from 'app/products/extension-home-loan/extension-home-loan.component';
import { RenovationHomeLoanComponent } from 'app/products/renovation-home-loan/renovation-home-loan.component';
import { RuralHomeLoanComponent } from 'app/products/rural-home-loan/rural-home-loan.component';

export const headerRoutes: Routes = [
  {
    path:'', redirectTo:'home', pathMatch:'full'
  },
  {
    path:'home', component:HomepageComponent
  },
  {
    path: 'enquiry', component:EnquiryComponent
  },
  {
    path:"rural-homeloan" , component:RuralHomeLoanComponent 
  },
  {
    path:'construction-loan', component:ConstructionLoanComponent 
  },
  {
    path:'extension-loan', component:ExtensionHomeLoanComponent
  },
  {
    path:'renovation-loan', component: RenovationHomeLoanComponent
  },
  {
    path: 'aboutus', component : AboutusComponent
  },
  {
    path:'emi', component: EmiCalculatorComponent
  },
  {
    path:'faq', component: FaqsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(headerRoutes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
