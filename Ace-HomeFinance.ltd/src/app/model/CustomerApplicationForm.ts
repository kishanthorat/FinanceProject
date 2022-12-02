import { AllPersonalDocs } from "./all-personal-docs";
import { CustomerAccountDetails } from "./customer-account-details";
import { CustomerAddress } from "./CustomerAddress";
import { CustomerDetails } from "./CustomerDetails";
import { DependentDetails } from "./DependentDetails";
import { EducationalDetail } from "./EducationalDetail";
import { GuarantorDetails } from "./guarantor-details";
import { Ledger } from "./ledger";
import { LoanDisbursement } from "./loan-disbursement";
import { Mortgage } from "./mortgage";
import { PreviousLoan } from "./previous-loan";
import { Profession } from "./profession";
import { PropertyDetails } from "./property-details";
import { SanctionLetter } from "./sanction-letter";

export class CustomerApplicationForm
{
    applicationNo:number;
    statusCode:string;
    customerDetails: CustomerDetails;
    customerDependent: DependentDetails;
    customerAddress: CustomerAddress;
    customerEducationDetails: EducationalDetail;
    customerProfession: Profession;
    mortgage: Mortgage;
    customerAccountDetail: CustomerAccountDetails;
    previousLoan: PreviousLoan;
    guarantorDetails : GuarantorDetails;
    propertyDetails: PropertyDetails;
    allPersonalDocs: AllPersonalDocs;
    
	   sanctionLetter:SanctionLetter;
	   ledger:Ledger;
	   loanDisbursement:LoanDisbursement;

     
}