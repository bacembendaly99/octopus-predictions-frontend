import {AbstractControl, ValidationErrors} from '@angular/forms';

export class PasswordValidator {
    static passwordsMatch(control: AbstractControl): ValidationErrors {
        const password = control.get('password').value;
        const repeatPassword = control.get('repeatPassword').value;
        if ((password === repeatPassword) && password != null && repeatPassword !== null) return null;
        else
            return {passwordsNotMatching: true};
    }
}
