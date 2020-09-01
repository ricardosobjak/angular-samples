import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

interface LoginResponse {
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  message: { type: string; text: string };

  // tslint:disable-next-line:max-line-length
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: formBuilder.control('eve.holt@reqres.in', [
        Validators.required,
        Validators.email,
      ]),
      password: formBuilder.control('cityslicka', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  ngOnInit() {}

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.loginService
      .login(this.f.username.value, this.f.password.value)
      .subscribe(
        (data: LoginResponse) => {
          console.log(data);
          localStorage.setItem('token', data.token);
          this.loginService.currentTokenValue = data.token;
          this.router.navigate(['/app']);
        },
        (error) => {
          console.log(error);
          this.message = { type: 'danger', text: error.error.error.toString() };
          this.loading = false;
        },
        () => (this.loading = false)
      );
  }
}
