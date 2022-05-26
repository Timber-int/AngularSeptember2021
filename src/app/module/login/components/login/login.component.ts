import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {LoginService} from '../../login-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  isPasswordTrue: string;

  constructor(private loginService: LoginService, private router: Router) {
    this._createForm();
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    });
  }

  login(): void {
    const data = this.form.getRawValue();
    this.loginService.login(data).subscribe(token => {
      this.loginService.setToken(token);
      this.router.navigate(['cars']).then();
    }, e => this.isPasswordTrue = e.error.detail);
  }
}
