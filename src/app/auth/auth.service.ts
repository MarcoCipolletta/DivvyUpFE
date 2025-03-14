import { Injectable } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { HttpClient } from '@angular/common/http';
import { iLoginRequest } from './interfaces/i-login-request';
import { iAuthResponse } from './interfaces/i-auth-response';
import { BehaviorSubject, tap } from 'rxjs';
import { iUser } from './interfaces/i-user';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = '';

  accessUser$ = new BehaviorSubject<iAuthResponse | null>(null);
  isLogged$ = new BehaviorSubject<boolean>(false);

  constructor(
    private langSvc: LanguageService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.langSvc.baseUrl$.subscribe((url) => (this.baseUrl = url + 'auth/'));

    this.accessUser$.subscribe((user) => {
      this.isLogged$.next(!!user);
    });
  }

  login(request: iLoginRequest) {
    return this.http
      .post<iAuthResponse>(this.baseUrl + 'login', request)
      .pipe(tap((user) => this.loginSuccess(user)));
  }

  loginWithGoogle() {
    let url = this.baseUrl.split('api/')[0] + 'oauth2/authorization/google';
    window.location.href = url;
  }

  loginWithSuccessGoogle() {
    let token = this.route.snapshot.queryParamMap.get('token');
    if (token) {
      this.getUserWithToken(token).subscribe((user) => {
        const accessUser: iAuthResponse = {
          token,
          user,
        };
        this.loginSuccess(accessUser);
      });
    }
  }
  getUser() {
    return this.http.get<iUser>(this.baseUrl + 'me');
  }
  private getUserWithToken(token: string) {
    return this.http.get<iUser>(this.baseUrl + 'me', {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  private loginSuccess(user: iAuthResponse) {
    this.accessUser$.next(user);
  }
}
