import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerApplicationForm } from 'app/model/CustomerApplicationForm';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoanApplicationService {

  constructor(private http: HttpClient) { }

  saveFormUrl:string="http://localhost:8888/customerApplicationForm";
  saveCustomerApplication(loanappln : any){
    return this.http.post(this.saveFormUrl, loanappln);

  }

  getApplFormsUrl:string="http://localhost:8888/getApplication/";
  getAllAppln():Observable<CustomerApplicationForm[]>{

    return this.http.get<CustomerApplicationForm[]>(this.getApplFormsUrl);
  }


  getSingleAppForm(id:number):Observable<CustomerApplicationForm>
  {
      return this.http.get<CustomerApplicationForm>(this.getApplFormsUrl+id);
  }
  
  //updatefor Verification
  updateStatusUrl : string="http://localhost:8888/updateAppln/"
  verifyApplication(customerAppl : CustomerApplicationForm):Observable<CustomerApplicationForm>
  {
    return this.http.put<CustomerApplicationForm>(this.updateStatusUrl+customerAppl.applicationNo, customerAppl);
  }

  //getVerifiedApp
  verifiedAppUrl:string="http://localhost:8888/getCmList";
  getVerifiedApp():Observable<CustomerApplicationForm[]>
  {
    return this.http.get<CustomerApplicationForm[]>(this.verifiedAppUrl);
  }

  sendSanctionUrl: string="http://localhost:8888/sendSanction";
  sendSanctionLetter(sendSanction: any){
    return this.http.post(this.sendSanctionUrl, sendSanction);
  }

   //getSanctionedApp
   sanctionedUrl:string="http://localhost:8888/getSanctionedList";
   getSanctionedApp():Observable<CustomerApplicationForm[]>
   {
     return this.http.get<CustomerApplicationForm[]>(this.sanctionedUrl);
   }

   //getforwardSanctionedApp
   forwardsanctionedUrl:string="http://localhost:8888/getforwardSanctionedList";
   getforwardSanctionedApp():Observable<CustomerApplicationForm[]>
   {
     return this.http.get<CustomerApplicationForm[]>(this.forwardsanctionedUrl);
   }

  //  getDisbursedList
  getDisbursedListUrl: string ="http://localhost:8888/getDisbursedList/"
   getDisbursedList(): Observable<CustomerApplicationForm[]>
   {
    return this.http.get<CustomerApplicationForm[]>(this.getDisbursedListUrl)
   }

   //updateLedger
   updateLedgerUrl :string="http://localhost:8888/updateLedger/";
   updateLedger(customer : CustomerApplicationForm){
   return this.http.put<CustomerApplicationForm>(this.updateLedgerUrl+customer.applicationNo, customer);
   }

   //http://localhost:8888/getDefaulterList
   getDefaulterUrl : string ="http://localhost:8888/getDefaulterList"
   getDefaulter(): Observable<CustomerApplicationForm[]>{
    return this.http.get<CustomerApplicationForm[]>(this.getDefaulterUrl)
   }
   
}
