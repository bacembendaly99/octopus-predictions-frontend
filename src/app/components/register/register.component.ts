import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordValidator} from '../../shared/validators/passwordValidator';
import {AuthService} from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        userName: [null, [Validators.required]],
        email: [null, [
          Validators.required,
          Validators.email,
        ]],
        password: [null, [
          Validators.required,
          Validators.minLength(6),
        ]],
        repeatPassword: [null, [
          Validators.required,
          Validators.minLength(6),
        ]],
      }, {
        validators: PasswordValidator.passwordsMatch,
      });
    }
}
