import { PreviousLoanBank } from "./previous-loan-bank";

export class PreviousLoan {
    previousLoanId:number;
    previousLoanAmount:number;
    paidAmount:number;
    remainingAmount:number;
    defaulterCount:number;
    loanStatus:string;
    remark:string;
    previousBankDetails:PreviousLoanBank;
}
