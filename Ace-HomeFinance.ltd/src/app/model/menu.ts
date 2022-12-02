export class Menu {
    public static menu: Array<any> = [
        {
    
      operational:[
        {path: "operational/oedash", title: "DASHBORD", icon: "pe-7s-graph", class: "" },
        {path: "operational/oeenquiry", title: "VIEW ENQUIERY", icon: "pe-7s-graph", class: "" },
        
        {path: "operational/appform", title: "Loan Application Form", icon: "pe-7s-graph", class: "" },
        // { path:"operational/appform/showDetail", title:"Show Detailed ApplicationForm", icon: "pe-7s-graph", class: ""},
      ],
      loanOfficer:[
        {path:"loanOfficer/loenquiry", title:"Enquiry", icon: "pe-7s-graph", class: ""  },
        {path:"loanOfficer/loanapp", title:"Fill Application Form", icon: "pe-7s-graph", class: ""  },
        
        {path:"loanOfficer/customers", title:"Sanctioned Customer list", icon: "pe-7s-graph", class: ""  },
        

      ],
      creditManager:[
        { path:"creditManager/view", title:"View All ApplicationForm", icon: "pe-7s-graph", class: ""},
        // { path:"creditManager/view/sanction", title:"Sanction Letter", icon: "pe-7s-graph", class: ""},
      ],
      accountHead :[
        { path:"accountHead/sanctioned", title:"sanctioned Applications", icon: "pe-7s-graph", class: ""},
        { path:"accountHead/disburselist", title:"Loan Disbursed List", icon: "pe-7s-graph", class: ""},
        {path:"accountHead/ledger", title:"Ledger List", icon: "pe-7s-graph", class: ""}
        
      ],
      teleCaller :[
        {path:" teleCaller/defaulter", title:"Defaulter List", icon: "pe-7s-graph", class: ""}
        
      ]
     
 } ];
}
