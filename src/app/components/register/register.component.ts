import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordValidator} from '../../shared/validators/passwordValidator';
import {AuthService} from '../../shared/services/auth/auth.service';
import {UserRegister} from '../../shared/dto/userRegister.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: UserRegister;

  constructor(
      private formBuilder: FormBuilder, private authService: AuthService, private router: Router
  ) {
  }

  ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        userName: [null, [Validators.required]],
        email: [null, [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]],        phoneNumber: [null, [
          Validators.required,
          Validators.pattern('^[0-9]{8}$'),
        ]],
        password: [null, [
          Validators.required,
          Validators.minLength(2),
        ]],
        repeatPassword: [null, [
          Validators.required,
          Validators.minLength(2),
        ]],
      }, {
        validators: PasswordValidator.passwordsMatch,
      });
    }

  register() {
    const user: UserRegister =
        new UserRegister(
            this.registerForm.value.email,
            this.registerForm.value.userName,
            this.registerForm.value.mobileNumber,
            this.registerForm.value.email);

    this.authService.register(user).subscribe(
        data => {
          // console.log(data)
          localStorage.setItem('access_token', data.accessToken);
          this.router.navigate(['home'])


        },
        error => {
          console.log('error : ', error);
  })
}

}
