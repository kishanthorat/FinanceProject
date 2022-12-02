import { Location } from '@angular/common';
import { Component, OnInit, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-sanction-letter',
  templateUrl: './sanction-letter.component.html',
  styleUrls: ['./sanction-letter.component.css']
})
export class SanctionLetterComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private ls : LoanApplicationService, private fb : FormBuilder, private location : Location) { 

     
  this.sanctionForm= this.fb.group({
    sanctionId: 0,
    sanctionDate: '',
    applicantName: '',
    contactDetails: '',
    loanAmountSanctioned: 0,
    interestType: '',
    rateOfInterest: 0,
    loanTenure: 0,
    monthlyEmiAmount: 0,
    modeOfPayment: ''
  });
  }
  verifiedAppForm:CustomerApplicationForm={
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
  sanctionForm: FormGroup;
  todayDate =new Date();
  ngOnInit(): void {
    this.ar.paramMap.subscribe(param1=>{
      this.ls.getSingleAppForm(parseInt(param1.get('applicationNo'))).subscribe(data=>{
          this.verifiedAppForm=data;
      });
  });

 
  console.log(this.verifiedAppForm);
  }
  

flag: true;

  updateSanction(){

    this.verifiedAppForm.statusCode='sanctioned';
    this.verifiedAppForm.sanctionLetter=this.sanctionForm.value;
    this.verifiedAppForm.sanctionLetter.applicantName=this.verifiedAppForm.customerDetails.customerName;
    this.verifiedAppForm.sanctionLetter.contactDetails=this.verifiedAppForm.customerDetails.customerEmailId;
    
    console.log(this.verifiedAppForm.sanctionLetter.sanctionDate);
  
    this.ls.verifyApplication(this.verifiedAppForm).subscribe();
    alert("sanction leter saved");
    this.download();
  }
 
  
  // calculateEMI() {
  //   if(this.sanctionForm.get('loanAmountSanctioned')&& this.sanctionForm.get('rateOfInterest') && this.sanctionForm.get('loanTenure')) {
  //     let mir = ( this.sanctionForm.loanAmountSanctioned / 100) / 12;
  //     let monthlyEmiAmount = this.sanctionForm.loanAmountSanctioned * mir * Math.pow((1 + mir), this.sanctionForm.loanTenure*12) / ((Math.pow((1 + mir), this.sanctionForm.loanTenure*12)) - 1);
  //     // let totalPayment = emi * this.loanTenure*12;
  //     // let totalInterest = totalPayment - this.loanAmountSanctioned;

  //     this.sanctionForm.monthlyEmiAmount = Math.round(monthlyEmiAmount);

  //   }
  // }



  download()
  {
    let data=document.getElementById('sanctionForm');

    html2canvas(data as any).then(canvas => {
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png');
      let pdfData = new jsPDF('p', 'mm', 'a4');
      var position = 0;
      pdfData.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdfData.save(`sanctionletter.pdf`);
  });
  }

  sanctionLetter: any;
  onselectsSanctionLetter(event){
    this.sanctionLetter=event.target.files[0];
  }

  sendEmail(){
   const toEmail = JSON.stringify(this.verifiedAppForm.customerDetails.customerEmailId);
   console.log(toEmail);
   const sendSanction=new FormData();
    sendSanction.append("sanctionLetter", this.sanctionLetter);
    sendSanction.append ("toEmail", toEmail);
    this.ls.sendSanctionLetter(sendSanction).subscribe();
    alert("mail sent successfully!");
  }

}