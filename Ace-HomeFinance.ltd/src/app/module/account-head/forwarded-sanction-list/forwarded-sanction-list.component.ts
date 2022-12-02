import { Component, OnInit } from '@angular/core';
import { CustomerApplicationForm } from 'app/model/CustomerApplicationForm';
import { LoanApplicationService } from 'app/service/loan-application.service';

@Component({
  selector: 'app-forwarded-sanction-list',
  templateUrl: './forwarded-sanction-list.component.html',
  styleUrls: ['./forwarded-sanction-list.component.css']
})
export class ForwardedSanctionListComponent implements OnInit {

  constructor(private ls : LoanApplicationService) { }
  forwardSanctionedList:CustomerApplicationForm[];
  ngOnInit(): void {
    this.ls.getforwardSanctionedApp().subscribe((data:CustomerApplicationForm[])=>{
        this.forwardSanctionedList=data;
        console.log(this.forwardSanctionedList);
    });
}
}
