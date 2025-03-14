import { Injectable } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { HttpClient } from '@angular/common/http';
import { iLoginRequest } from './interfaces/i-login-request';
import { iAuthResponse } from './interfaces/i-auth-response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = '';
  constructor(
    private langSvc: LanguageService,
    private http: HttpClient,
    private route: Router
  ) {
    this.langSvc.baseUrl$.subscribe(
      (url) => (this.baseUrl = url + 'auth/login')
    );
  }

  login(reuqest: iLoginRequest) {
    return this.http.post<iAuthResponse>(this.baseUrl, reuqest);
  }

  loginWithGoogle() {
    let url = this.baseUrl.split('api/')[0] + 'oauth2/authorization/google';
    this.route.navigateByUrl(url);
  }
}
