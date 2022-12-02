import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enquiry } from 'app/model/enquiry';
import { CommonService } from 'app/service/common.service';

@Component({
  selector: 'app-enquiry-list',
  templateUrl: './enquiry-list.component.html',
  styleUrls: ['./enquiry-list.component.css']
})
export class EnquiryListComponent implements OnInit {

  enq:Enquiry={
    enquiryId: 0,
    enquiryName: '',
    age: 0,
    email: '',
    mobileNo: 0,
    pancardNo: '',
    remark: '',
    cibilScore: {
      cibilId: 0,
      cibilScore: '0',
      cibilScoreDate: '',
      status: ''
    }
  }
  constructor(private cs :CommonService, private routes: Router) { }
  enquiryList:Enquiry[];
  ngOnInit(): void {

    this.cs.getEnquiry().subscribe((data:Enquiry[])=>{
      this.enquiryList=data;
      console.log(this.enquiryList);
    });
  }
 

  proceedToOper(enquiry: Enquiry){
    enquiry.remark='forwarded';
    this.cs.updateEnquiry(enquiry).subscribe();
    alert("Forwarded to operational");
  }
  apply(){
    this.routes.navigateByUrl("role/loanOfficer/loanapp");
  }

}
