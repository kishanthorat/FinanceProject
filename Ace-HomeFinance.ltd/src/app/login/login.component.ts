import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb : FormBuilder, private router: Router) { }
  loginForm: FormGroup;
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:[''],
      password:['']
    })
  }

  logOn(){

    if (this.loginForm.get('username').value=="oe" && this.loginForm.get('password').value=="oe"){
      console.log('in re')
      sessionStorage.setItem('role', 'operational');
      this.router.navigateByUrl("role/operational/oeenquiry");
    }
    if (this.loginForm.get('username').value=="lo" && this.loginForm.get('password').value=="lo"){
      sessionStorage.setItem('role', 'loanOfficer');
      this.router.navigateByUrl("role/loanOfficer/loenquiry");
    }
    if (this.loginForm.get('username').value=="cm" && this.loginForm.get('password').value=="cm"){
      sessionStorage.setItem('role', 'creditManager');
      this.router.navigateByUrl("role/creditManager/view");
    }
    if (this.loginForm.get('username').value=="ah" && this.loginForm.get('password').value=="ah"){
      sessionStorage.setItem('role', 'accountHead');
      this.router.navigateByUrl("role/accountHead/sanctioned");
    }
    if (this.loginForm.get('username').value=="tc" && this.loginForm.get('password').value=="tc"){
      sessionStorage.setItem('role', 'teleCaller');
      this.router.navigateByUrl("role/teleCaller/defaulter");
    }
}
}
