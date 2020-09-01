import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthUtilService } from '../auth-util.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  message: { type: string; text: string };

  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private route: ActivatedRoute, private router: Router, private authUtil: AuthUtilService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

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

    this.authService.login(this.f.username.value, this.f.password.value).subscribe(
      data => {
        localStorage.setItem('token', data);
        this.authUtil.currentTokenValue = data;
        console.log(this.authUtil.currentTokenValue);
        //this.router.navigate([this.returnUrl]);
        this.router.navigate(['/app']);
      },
      error => {
        console.log(error);
        this.message = { type: 'danger', text: error };
        this.loading = false;
      },
      () => (this.loading = false)
    );
  }
}
