import { Component, OnInit } from '@angular/core';
import { CustomerApplicationForm } from 'app/model/CustomerApplicationForm';
import { LoanApplicationService } from 'app/service/loan-application.service';

@Component({
  selector: 'app-loan-disburse-list',
  templateUrl: './loan-disburse-list.component.html',
  styleUrls: ['./loan-disburse-list.component.css']
})
export class LoanDisburseListComponent implements OnInit {

  constructor(private ls : LoanApplicationService) { }
  disbursedList :CustomerApplicationForm[];
  ngOnInit(): void {
    this.ls.getDisbursedList().subscribe((data:CustomerApplicationForm[])=>{
      this.disbursedList=data;
      console.log(this.disbursedList);
  });
  }

}
