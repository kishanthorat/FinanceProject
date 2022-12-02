import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllPersonalDocs } from 'app/model/all-personal-docs';
import { CustomerAccountDetails } from 'app/model/customer-account-details';
import { CustomerAddress } from 'app/model/CustomerAddress';
import { CustomerApplicationForm } from 'app/model/CustomerApplicationForm';
import { CustomerDetails } from 'app/model/CustomerDetails';
import { DependentDetails } from 'app/model/DependentDetails';
import { EducationalDetail } from 'app/model/EducationalDetail';
import { GuarantorDetails } from 'app/model/guarantor-details';
import { Ledger } from 'app/model/ledger';
import { LoanDisbursement } from 'app/model/loan-disbursement';
import { Mortgage } from 'app/model/mortgage';
import { PreviousLoan } from 'app/model/previous-loan';
import { Profession } from 'app/model/profession';
import { PropertyDetails } from 'app/model/property-details';
import { SanctionLetter } from 'app/model/sanction-letter';
import { LoanApplicationService } from 'app/service/loan-application.service';
import * as moment from 'moment';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-emi-list',
  templateUrl: './emi-list.component.html',
  styleUrls: ['./emi-list.component.css']
})
export class EmiListComponent implements OnInit {

  constructor(private routes:ActivatedRoute,private ls :LoanApplicationService) {


  }
  custObj:CustomerApplicationForm={
   applicationNo: 0,
 statusCode: '',
 customerDetails: new CustomerDetails,
 customerDependent: new DependentDetails,
 customerAddress: new CustomerAddress,
 customerEducationDetails: new EducationalDetail,
 customerProfession: new Profession,
 mortgage: new Mortgage,
 customerAccountDetail: new CustomerAccountDetails,
 previousLoan: new PreviousLoan,
 guarantorDetails: new GuarantorDetails,
 propertyDetails: new PropertyDetails,
 allPersonalDocs: new AllPersonalDocs,
 sanctionLetter: new SanctionLetter,
 ledger: new Ledger,
 loanDisbursement: new LoanDisbursement
 }

 
  disbursedList:any[];
  
  monthArray : any[];
  startDate:any;
  endDate:any;
  ngOnInit(): void {
    this.routes.paramMap.subscribe(param1=>{
      this.ls.getSingleAppForm(parseInt(param1.get('applicationNo'))).subscribe(data=>{
          this.custObj=data;
          console.log(this.custObj.ledger.ledgerCreatedDate);
           this.startDate=this.custObj.ledger.ledgerCreatedDate;
           this.endDate=this.custObj.ledger.loanEndDate;
           
    let dateStart = moment(this.startDate);
    let dateEnd = moment(this.endDate);
    
    
    var timeValues = [];
    
    while (dateEnd > dateStart || dateStart.format('M') === dateEnd.format('M')) {
       timeValues.push(dateStart.format('YYYY-MM'));
       dateStart.add(1,'month');
       
       this.monthArray=timeValues;
      
    }
      });
    }) 
  }
 


  payDate(){
    // this.custObj.ledger.
  }

  unpaid(){
    this.custObj.ledger.defaulterCount++;
   
    this.ls.updateLedger(this.custObj).subscribe();
  }
}
