import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enquiry } from 'app/model/enquiry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http : HttpClient) { }
  enquiryUrl:string="http://localhost:8888/enquiry/";
  addEnquiry(enquiry :Enquiry){
    return this.http.post<Enquiry>(this.enquiryUrl, enquiry);

  }

  getEnquiry():Observable<Enquiry[]>{
    return this.http.get<Enquiry[]>(this.enquiryUrl);
  }

 

  forwardedEnquiryUrl:string="http://localhost:8888/oeEnquiry/"
  getForwardedEnquiry():Observable<Enquiry[]>{
    return this.http.get<Enquiry[]>(this.forwardedEnquiryUrl);
  }

  updateEnquiry(enquiry: Enquiry){
    return  this.http.put<Enquiry[]>(this.enquiryUrl+enquiry.enquiryId, enquiry);
  }
  generateCibilUrl :string="http://localhost:8888/generate/"
  generateCibil(oe: Enquiry){
    return this.http.put<Enquiry>(this.generateCibilUrl+oe.enquiryId, oe);
  }
  rejectUrl:string="http://localhost:8888/rejected/"
  rejected(e : Enquiry){
    return this.http.put<Enquiry>(this.rejectUrl+e.enquiryId,e);

  }
  approvedApplUrl:string="http://localhost:8888/approved/";
  eligibleForAppl(oeapprove : Enquiry){
    return this.http.put<Enquiry>(this.approvedApplUrl+oeapprove.enquiryId, oeapprove);
  }


  getcustomerEnquiry(id:number):Observable<Enquiry>
  {
      return this.http.get<Enquiry>(this.enquiryUrl+id);
  }

}
