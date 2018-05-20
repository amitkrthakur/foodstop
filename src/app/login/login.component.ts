import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatExpansionPanel, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators, EmailValidator } from '@angular/forms'
import { Router } from "@angular/router";
import { DataService } from '../data.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  response: any;
  loginform: FormGroup;
  email: FormControl;
  password: FormControl;
  remember: FormControl;

  constructor(private httpService: HttpService, private router: Router, private fb: FormBuilder, private dt: DataService, public snackBar: MatSnackBar, ) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ]);
    this.password = new FormControl('', Validators.required);
    this.remember = new FormControl
  }

  createForm() {
    this.loginform = this.fb.group({
      email: this.email,
      password: this.password,
      remember: this.remember
    })
  }

  onSubmit() {
    if (this.loginform.valid) {
      console.log("logging in user...");
      let data: any = { 'email': this.email.value, 'pwd': this.password.value, 'rem': this.remember.value };
      console.log(JSON.stringify(data));
      // this.httpService.loginUser(data).subscribe(
      //   (data: any) => {
      //     console.log(JSON.stringify(data));
      //     this.response = JSON.parse(data.error);
      //     console.log(this.response)
      //     if (this.response.code == '021') {
      //       this.router.navigateByUrl("/browse");
      //     }
      //   }
      // );
      if (this.dt.user.id == this.email.value && this.dt.user.pass == this.password.value) {
        this.router.navigateByUrl("/browse");
        this.snackBar.open('Login', 'Successfull', {
          duration: 2000,
        });
      }
      else {
        this.snackBar.open('Invalid', 'Credentials', {
          duration: 2000,
        });
      }
    }
    else {
      console.log("FormData is Invalid");
    }
  }
}
export class response {
  code: number;
  err: string;
  msg: string
}