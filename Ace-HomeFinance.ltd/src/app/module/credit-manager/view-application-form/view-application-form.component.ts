import { Component, OnInit } from '@angular/core';
import { CustomerApplicationForm } from 'app/model/CustomerApplicationForm';
import { LoanApplicationService } from 'app/service/loan-application.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-application-form',
  templateUrl: './view-application-form.component.html',
  styleUrls: ['./view-application-form.component.css']
})
export class ViewApplicationFormComponent implements OnInit {

  constructor(private loanAppl : LoanApplicationService) { }
  applicationList:CustomerApplicationForm[];
  ngOnInit(): void {
    this.loanAppl.getVerifiedApp().subscribe((data:CustomerApplicationForm[])=>{
        this.applicationList=data;
        console.log(this.applicationList);
    });
  }

}
