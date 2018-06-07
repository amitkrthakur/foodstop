import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { HttpService } from '../http.service';
import { CustomValidations } from '../custom-validations'


@Component({
  selector: 'app-pwdreset',
  templateUrl: './pwdreset.component.html',
  styleUrls: ['./pwdreset.component.scss']
})
export class PwdresetComponent implements OnInit {

  response: any = { code: '' }
  pwdresetForm: FormGroup
  password: FormControl
  confirm_password: FormControl
  code: string = "";

  constructor(private httpService: HttpService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.setCode();
    this.createFormControls();
    this.createForm();
  }

  setCode(): void {
    this.code = this.route.snapshot.paramMap.get('code');
  }

  createFormControls() {
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.confirm_password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  }

  createForm() {
    this.pwdresetForm = this.fb.group({
      password: this.password,
      confirm_password: this.confirm_password
    },
      {
        validator: CustomValidations.MatchPassword // your validation method
      }
    )
  }

  onSubmit() {
    if (this.pwdresetForm.valid) {
      const data: any = { 'pwd': JSON.stringify(this.password.value), 'code': this.code };
      console.log("sending password...");
      this.httpService.resetPwd(data).subscribe(
        (data:any) => {
        //console.log(JSON.stringify(data));
          this.response = JSON.parse(data.error);
          console.log(this.response)
        }
      );
    }
    else {
      console.log("FormData is Invalid");
    }
  }

}
