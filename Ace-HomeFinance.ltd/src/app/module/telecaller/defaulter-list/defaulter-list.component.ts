import { Component, OnInit } from '@angular/core';
import { CustomerApplicationForm } from 'app/model/CustomerApplicationForm';
import { LoanApplicationService } from 'app/service/loan-application.service';

@Component({
  selector: 'app-defaulter-list',
  templateUrl: './defaulter-list.component.html',
  styleUrls: ['./defaulter-list.component.css']
})
export class DefaulterListComponent implements OnInit {

  constructor(private loanAppl : LoanApplicationService) { }
  defaulterList:CustomerApplicationForm[];
  ngOnInit(): void {
    this.loanAppl.getDefaulter().subscribe((data:CustomerApplicationForm[])=>{
        this.defaulterList=data;
        console.log(this.defaulterList);
    });
  }

}
