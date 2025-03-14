import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-oauth-success',
  templateUrl: './login-oauth-success.component.html',
  styleUrl: './login-oauth-success.component.scss',
})
export class LoginOauthSuccessComponent {
  constructor(private authSvc: AuthService) {
    this.authSvc.loginWithSuccessGoogle();
  }
}
