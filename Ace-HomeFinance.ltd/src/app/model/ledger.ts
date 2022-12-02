export class Ledger {
    ledgerId :number;
	 ledgerCreatedDate : string;
	 totalLoanAmount : number;
	 payableAmountWithInterest :number;
	 tenure :number;
	 monthlyEmi :number;
	 amountPaidTillDate :number;
	 remainingAmount :number;
	 nextEmiDateStart : string;
	 nextEmiDateEnd : string;
	 defaulterCount:number;
     previousEmiStatus: string;
	currentMonthEmiStatus: string;
	loanEndDate : string;
	loanStatus : string;
}
