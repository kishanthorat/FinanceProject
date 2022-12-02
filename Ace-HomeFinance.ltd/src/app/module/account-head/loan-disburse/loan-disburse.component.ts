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

@Component({
  selector: 'app-loan-disburse',
  templateUrl: './loan-disburse.component.html',
  styleUrls: ['./loan-disburse.component.css']
})
export class LoanDisburseComponent implements OnInit {

 
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
     loanDisbursement: new LoanDisbursement,
   }


  ngOnInit(): void {

  
      this.routes.paramMap.subscribe(param1=>{
      this.ls.getSingleAppForm(parseInt(param1.get('applicationNo'))).subscribe(data=>{
          this.custObj=data;
      });
    })
  }
  
  todayDate=new Date();

  loanDisbursement()
  {
    // console.log("Total Amount Paid"+this.custObj.loandisbursement.totalAmount)
    // this.commonService.getregisterData().subscribe();
    this.custObj.statusCode='disbursed';
    this.custObj.loanDisbursement.loanNumber=this.custObj.sanctionLetter.sanctionId;
    this.custObj.loanDisbursement.aggrementDate=this.custObj.sanctionLetter.sanctionDate;
    this.custObj.loanDisbursement.totalAmount=this.custObj.sanctionLetter.loanAmountSanctioned;
    this.custObj.loanDisbursement.bankName=this.custObj.customerAccountDetail.bankName;
    this.custObj.loanDisbursement.accountNumber=this.custObj.customerAccountDetail.accountNo;
    this.custObj.loanDisbursement.ifscCode=this.custObj.customerAccountDetail.ifscCode;
    this.custObj.loanDisbursement.accountType=this.custObj.customerAccountDetail.accountType;
    this.custObj.loanDisbursement.paymentStatus="PAID";
    //this.custObj.loanDisbursement.amountPaidDate=this.todayDate;

    this.custObj.ledger.ledgerCreatedDate=this.custObj.loanDisbursement.amountPaidDate;
    this.custObj.ledger.monthlyEmi=this.custObj.sanctionLetter.monthlyEmiAmount;
    this.custObj.ledger.tenure=this.custObj.sanctionLetter.loanTenure;
    this.custObj.ledger.payableAmountWithInterest=this.custObj.loanDisbursement.totalAmount;
    this.custObj.ledger.totalLoanAmount=this.custObj.loanDisbursement.transferAmount;
    this.custObj.ledger.remainingAmount=this.custObj.loanDisbursement.transferAmount;
    console.log("Total Amount Paid"+this.custObj.loanDisbursement.totalAmount);
    console.log(" Amount Paid Date:"+this.custObj.loanDisbursement.amountPaidDate);

    this.ls.verifyApplication(this.custObj).subscribe();

    
  }


}
