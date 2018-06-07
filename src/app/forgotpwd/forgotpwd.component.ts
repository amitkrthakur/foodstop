import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.scss']
})
export class ForgotpwdComponent implements OnInit {

  response: any = { code: '' }
  resetpwdForm: FormGroup
  email: FormControl

  constructor(private httpService: HttpService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ]);
  }

  createForm() {
    this.resetpwdForm = this.fb.group({
      email: this.email,
    })
  }

  onSubmit() {
    if (this.resetpwdForm.valid) {
      console.log("sending to server...");
      this.httpService.initiatePwdReset(this.email.value).subscribe(
        (data: any) => {
          console.log(data);
          this.response = JSON.parse(data.error);
          console.log(this.response);
        }
      );
      console.log("Form Submitted", this.resetpwdForm.value)
    }
    else {
      console.log("FormData is Invalid");
    }
  }
}
