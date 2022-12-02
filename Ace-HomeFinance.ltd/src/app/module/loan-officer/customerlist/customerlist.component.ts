import { Component, OnInit } from '@angular/core';
import { CustomerApplicationForm } from 'app/model/CustomerApplicationForm';
import { LoanApplicationService } from 'app/service/loan-application.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  constructor(private ls : LoanApplicationService) { }
  sanctionedList:CustomerApplicationForm[];
  ngOnInit(): void {
    this.ls.getSanctionedApp().subscribe((data:CustomerApplicationForm[])=>{
        this.sanctionedList=data;
        console.log(this.sanctionedList);
    });
  }


  requestDisburse(disburseApp : CustomerApplicationForm){
    disburseApp.statusCode='forwardedtoAH'
    this.ls.verifyApplication(disburseApp).subscribe();
    alert("forwarded to Account Head");

  }
}
