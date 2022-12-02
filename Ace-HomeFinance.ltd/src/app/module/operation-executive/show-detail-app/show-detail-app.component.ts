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
  selector: 'app-show-detail-app',
  templateUrl: './show-detail-app.component.html',
  styleUrls: ['./show-detail-app.component.css']
})
export class ShowDetailAppComponent implements OnInit {

  constructor(private ar:ActivatedRoute, private ls:LoanApplicationService) { }
appForm:CustomerApplicationForm={
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

};
  

ngOnInit(): void {
    this.ar.paramMap.subscribe(param1=>{
      this.ls.getSingleAppForm(parseInt(param1.get('applicationNo'))).subscribe(data=>{
          this.appForm=data;
      })
    })
    console.log(this.count);
    console.log(this.appForm);
  }


  addressProofStatus:string;
    panCardStatus:string;
    aadharStatus:string;
    incomeTaxReturnStatus:string;
    photoStatus:string;
    signatureStatus:string;
    thumbStatus:string;
    bankChequeStatus:string;
    bankStatementStatus:string;

  count:any=0;
  countVerify()
  {
    this.count=this.count+1;

    console.log(this.count);
  }

  countUnverify(){
    // this.count=this.count-1;

    console.log(this.count);
  }

  verifiedAppln(customerAppl:CustomerApplicationForm)
  {
    customerAppl.statusCode='verified';
    this.ls.verifyApplication(customerAppl).subscribe();
    alert("verification Done");
  }
}
