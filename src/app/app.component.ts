import {Component, OnInit} from '@angular/core';
import {LoginService} from './module/login/login-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
    if (this.loginService.isAuthorization()) {
      this.router.navigate(['cars']).then();
    }
  }
}
