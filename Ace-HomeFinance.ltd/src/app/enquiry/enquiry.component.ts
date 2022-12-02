import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'app/service/common.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  constructor(private cs:CommonService, private fb :FormBuilder) { }
  enquiryForm:FormGroup;
  ngOnInit(): void {
    this.enquiryForm=this.fb.group({
      enquiryId:[],
      enquiryName :['', Validators.required],
      age:['', Validators.required],
      email:['', Validators.required],
      mobileNo:[0, Validators.required],
      pancardNo:['', Validators.required]
    })

  }

  addEnquiry(){
    this.cs.addEnquiry(this.enquiryForm.value).subscribe();
    alert("Enquiry Added");
    window.location.reload();
  }

}
