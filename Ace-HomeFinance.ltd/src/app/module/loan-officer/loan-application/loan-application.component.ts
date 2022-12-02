import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Enquiry } from 'app/model/enquiry';
import { CommonService } from 'app/service/common.service';
import { LoanApplicationService } from 'app/service/loan-application.service';


@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {
  loanForm: FormGroup;
  
  professionsalarySlip:any;
  
  propertyProof:any;
  propertyInsurance:any;
  
  addressProof:any;
  panCard:any;
  aadhar:any;
  incomeTaxReturn:any;
  photo:any;
  signature:any;
  thumb:any;
  bankCheque:any;
  bankStatement:any;



  step:number = 1;

  imageSrc1:any;
  imageSrc2:any;
  imageSrc3:any;
  imageSrc4:any;
  imageSrc5:any;
  imageSrc6:any;  
  imageSrc7:any;
  imageSrc8:any;
  imageSrc9:any;
  imageSrc10:any;
  imageSrc11:any;
  imageSrc12:any;

  constructor(private fb: FormBuilder,
     private loanService: LoanApplicationService,
      private activatedRoutes: ActivatedRoute,
      private location: Location,
       private cs: CommonService) {

    this.loanForm = this.fb.group({
      // applicationNo:[],
      statusCode:['', Validators.required],
      customerDetails:this.fb.group({
        // customerId:[],
        customerName:['', Validators.required],
       customerMobileno:['', Validators.required],
        customerEmailId:['', Validators.required],
        adharNo:['', Validators.required],
        pancardNo:['',Validators.required],
        gender:['', Validators.required],
        customerDOB:['', Validators.required],
        customerAge:['', Validators.required],
        loanType:['', Validators.required],
        maritalStatus:['', Validators.required],
        cibilScore:['',Validators.required],
        
        totalLoanRequired:['', Validators.required]
      }),

      customerDependent:this.fb.group({
        // dependentId :[],
    fatherName:['', Validators.required],
    motherName:['', Validators.required],
    noOfFamilyMember:['', Validators.required],
    noOfChild:['', Validators.required],
    // maritalStatus:['', Validators.required],
    dependentMember:['', Validators.required],
    familyIncome:['', Validators.required],
    spouseName:['', Validators.required],
      }),

      customerAddress:this.fb.group({
        // customerAddressId:[],
                permanentAddress:  this.fb.group({
                // permanentId:[],
                areaName: ['', Validators.required],
                cityName: ['', Validators.required],
                district: ['',Validators.required],
                state: ['',Validators.required],
                pinCode: ['',Validators.required],
                houseNo:['',Validators.required],
                streetName:['',Validators.required],
                  }),
                
               localAddress:  this.fb.group({
                // localId:[],
                areaName:['',Validators.required],
                cityName:['',Validators.required],
                district:['',Validators.required],
                state:['',Validators.required],
                pinCode:['',Validators.required],
                houseNo:['',Validators.required],
                streetName:['',Validators.required],
               }),
      }),
     
      customerEducationDetails:this.fb.group({
        // educationalId:[],
        educationalSpecialization:['',Validators.required],
        passingYear:['',Validators.required],
        qualification:['',Validators.required],
      }),

      customerProfession:this.fb.group({ 
        // professionId:[],
        professionType:['',Validators.required],
        professionSalary:['',Validators.required],
        professionWorkingPeriod:['',Validators.required],
        professionDesignation:['',Validators.required],
        //professionsalarySlip:[],

      }),

      mortgage:this.fb.group({ 
        // mortgageId:[],
        propertyValue:['',Validators.required],
        // propertyProof:[],
        // propertyInsurance:[],
        propertyType:['',Validators.required],
        loanOnProperty:['',Validators.required],
      }),

      customerAccountDetail:this.fb.group({ 
        // accountId:[],
        accountNo:['',Validators.required],
        accountType:['',Validators.required],
        accountHolderName:['',Validators.required],
        accountStatus:['',Validators.required],
        bankName:['',Validators.required],
        ifscCode:['',Validators.required]
      }),

      previousLoan:this.fb.group({ 
        // previousLoanId:[],
        previousLoanAmount:['',Validators.required],
        paidAmount:['',Validators.required],
        remainingAmount:['',Validators.required],
        defaulterCount:['',Validators.required],
        loanStatus:['',Validators.required],
        remark:['',Validators.required],

            previousBankDetails:this.fb.group({ 
              // branchId:[],
              branchName:['',Validators.required],
              ifscCode:['',Validators.required],
              micrCode:['',Validators.required],
              contactNo:['',Validators.required],
              email :['',Validators.required],
              status:['',Validators.required],
        
                bankAddress:this.fb.group({ 
                  // bankId:[],
                  bankArea:['',Validators.required],
                  bankCity:['',Validators.required],
                  bankDistrict:['',Validators.required],
                  bankState:['',Validators.required],
                  pincode:['',Validators.required],
                }),
            }),
      }),

      guarantorDetails:this.fb.group({ 
        // guarantorId:[],
        guarantorName:['',Validators.required],
        guarantorDOB:['',Validators.required],
        guarantorRelationshipwithCustomer:['',Validators.required],
        guarantorMobileNo:['',Validators.required],
        guarantorAdharcardNo:['',Validators.required],
        guarantorJobDetails:['',Validators.required],
        guarantorCityName:['',Validators.required],
        guarantorAreaName:['',Validators.required],
      }),

      propertyDetails:this.fb.group({ 
        // propertyId:[],
        propertyType:['',Validators.required],
        propertyArea:['',Validators.required],
        constructionArea:['',Validators.required],
        propertyPrice:['',Validators.required],
        constructionPrice:['',Validators.required],
        
            propertyAddress:this.fb.group({ 
              // propertyAdrId:[],
              propertyAreaName:['',Validators.required],
              propertyCityName:['',Validators.required],
              propertyDistrict:['',Validators.required],
              propertyState:['',Validators.required],
              propertyPinCode:['',Validators.required],
            }),
      }),

      // allPersonalDocs:this.fb.group({
      //   documentId:[],
      //  }),
 
          // processingFee:this.fb.group({
          //   fees: ['', Validators.required],
          // })

    }); 
  }
  // customerEnquiry: Enquiry={
  //   enquiryId: 0,
  //   enquiryName: '',
  //   age: 0,
  //   email: '',
  //   mobileNo: 0,
  //   pancardNo: '',
  //   remark: '',
  //   cibilScore: {
  //     cibilId: 0,
  //     cibilScore: '0',
  //     cibilScoreDate: '',
  //     status: ''
  //   }
  // }
  ngOnInit() {
    // this.activatedRoutes.paramMap.subscribe(param1=>{
    //   this.cs.getcustomerEnquiry(parseInt(param1.get('enquiryId'))).subscribe(data=>{
    //       this.customerEnquiry=data;
    //   })
    // })

    // console.log(this.customerEnquiry);
  
  

    

  }

 
     
  next(){
    this.step++;
  }

previous(){
       this.step--;
      }

  
  saveAll(){
    this.loanForm.get('statusCode').setValue('applied');
    const customerApplication=JSON.stringify(this.loanForm.value);
    const customerloanApplication=new FormData();

    customerloanApplication.append("customerApplication", customerApplication);
    customerloanApplication.append("adharCard", this.aadhar);
    customerloanApplication.append("professionsalarySlips", this.professionsalarySlip);
    customerloanApplication.append("addressProof", this.addressProof);
    customerloanApplication.append("propertyProof",this.propertyProof);
    customerloanApplication.append("propertyInsurance", this.propertyInsurance );
    customerloanApplication.append("panCard", this.panCard);
    customerloanApplication.append("incomeTaxReturn",this.incomeTaxReturn );
    customerloanApplication.append("photo", this.photo );
    customerloanApplication.append("signature",this.signature );
    customerloanApplication.append("thumb",this.thumb );
    customerloanApplication.append("bankCheque",this.bankCheque );
    customerloanApplication.append("bankStatement",this.bankStatement );

    this.loanService.saveCustomerApplication(customerloanApplication).subscribe();
    alert("Loan Application Submited");
    
  }
reader= new FileReader();
  
  onselectAadhar(event){

    this.aadhar= event.target.files[0];
    this.reader.onload=e=>this.imageSrc1=this.reader.result;
    this.reader.readAsDataURL(this.aadhar);

  }
  
  onselectpanCard(event){
    this.panCard= event.target.files[0];
    this.reader.onload=e=>this.imageSrc2=this.reader.result;
    this.reader.readAsDataURL(this.panCard);
  }
  onselectaddressProof(event){
    this.addressProof= event.target.files[0];
    this.reader.onload=e=>this.imageSrc3=this.reader.result;
    this.reader.readAsDataURL(this.addressProof);
  }
  onselectItr(event){
    this.incomeTaxReturn= event.target.files[0];
    this.reader.onload=e=>this.imageSrc4=this.reader.result;
    this.reader.readAsDataURL(this.incomeTaxReturn);
  }
  onselectphoto(event){
    this.photo= event.target.files[0];
    this.reader.onload=e=>this.imageSrc5=this.reader.result;
    this.reader.readAsDataURL(this.photo);
  }
  onselectsignature(event){
    this.signature= event.target.files[0];
    this.reader.onload=e=>this.imageSrc6=this.reader.result;
    this.reader.readAsDataURL(this.signature);
  }

  onselectThumb(event){
    this.thumb= event.target.files[0];
    this.reader.onload=e=>this.imageSrc7=this.reader.result;
    this.reader.readAsDataURL(this.thumb);
  }
  onselectbankCheque(event){
    this.bankCheque= event.target.files[0];
    this.reader.onload=e=>this.imageSrc8=this.reader.result;
    this.reader.readAsDataURL(this.bankCheque);
  }
  onselectbankStatement(event){
    this.bankStatement= event.target.files[0];
    this.reader.onload=e=>this.imageSrc9=this.reader.result;
    this.reader.readAsDataURL(this.bankStatement);
  }
  onselectsSalarySlip(event){
    this.professionsalarySlip= event.target.files[0];
    this.reader.onload=e=>this.imageSrc10=this.reader.result;
    this.reader.readAsDataURL(this.professionsalarySlip);
  }
  onselectpropertyProof(event){
    this.propertyProof= event.target.files[0];
    this.reader.onload=e=>this.imageSrc11=this.reader.result;
    this.reader.readAsDataURL(this.propertyProof);
  }
  onselectpropertyInsurance(event){
    this.propertyInsurance= event.target.files[0];
    this.reader.onload=e=>this.imageSrc12=this.reader.result;
    this.reader.readAsDataURL(this.propertyInsurance);
  }
}
