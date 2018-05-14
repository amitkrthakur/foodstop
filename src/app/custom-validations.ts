import { AbstractControl } from '@angular/forms';

export class CustomValidations {

    static MatchPassword(AC: AbstractControl) {
        let password = AC.get('password').value; // to get value in input tag
        let confirmPassword = AC.get('confirm_password').value; // to get value in input tag
        if (password != confirmPassword) {
            AC.get('confirm_password').setErrors({ MatchPassword: true })
        } else {
            return null
        }
    }

    static AcceptTerms(AC: AbstractControl) {
        let agreeTerms = AC.get('agree').value;
        if (agreeTerms !== true) {
            AC.get('agree').setErrors({ AcceptTerms: true })
        }
        else {
            return null
        }
    }
}