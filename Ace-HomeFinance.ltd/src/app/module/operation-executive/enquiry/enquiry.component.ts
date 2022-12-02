import { Component, OnInit } from '@angular/core';
import { CibilScore } from 'app/model/cibil-score';
import { Enquiry } from 'app/model/enquiry';
import { CommonService } from 'app/service/common.service';


@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {


ol:Enquiry={
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



  constructor(private cs : CommonService) { }
  enquiryList :Enquiry[];
  ngOnInit(): void {

    this.cs.getForwardedEnquiry().subscribe(data=>{
      this.enquiryList=data;
    })
  }

  generateCibil(e : Enquiry){
    this.cs.generateCibil(e).subscribe();
    window.location.reload();
  }
  eligibleForAppl(e: Enquiry){
    e.remark='approved';
    this.cs.eligibleForAppl(e).subscribe();
    alert("approved application");
    window.location.reload();
  }

  rejected(e : Enquiry) {
    e.remark='rejected';
    this.cs.rejected(e).subscribe();
    alert("application rejected");
    window.location.reload();

  }
}

