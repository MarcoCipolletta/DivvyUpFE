import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import {
  BehaviorSubject,
  Observable,
  Subscription,
  catchError,
  map,
  of,
  tap,
} from 'rxjs';
import { GenericTranslateService } from '../services/translate/generic-translate.service';

@Injectable({
  providedIn: 'root',
})
export class AuthTranslateService extends GenericTranslateService<iAuth> {
  constructor(translate: TranslateService, http: HttpClient) {
    super(translate, http, 'auth', 'auth');
  }
}

// Interfacce di traduzione
export interface iLogin {
  h2: string;
  'sub-title': string;
  identifier: string;
  enter: string;
  or: string;
  google: string;
  remember: string;
  forgot: string;
  'not-register': {
    title: string;
    link: string;
  };
}

export interface iAuth {
  login: iLogin;
}
