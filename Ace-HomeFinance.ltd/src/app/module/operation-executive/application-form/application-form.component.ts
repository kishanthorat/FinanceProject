import { Component, OnInit } from '@angular/core';
import { CustomerApplicationForm } from 'app/model/CustomerApplicationForm';
import { LoanApplicationService } from 'app/service/loan-application.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  constructor(private loanAppl : LoanApplicationService) { }
  applicationList:CustomerApplicationForm[];
  ngOnInit(): void {
    this.loanAppl.getAllAppln().subscribe((data:CustomerApplicationForm[])=>{
        this.applicationList=data;
        console.log(this.applicationList);
    });
  }

}
