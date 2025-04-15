import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GenericTranslateService } from '../../services/translate/generic-translate.service';

@Injectable({
  providedIn: 'root',
})
export class LandingTranslateService extends GenericTranslateService<iLanding> {
  constructor(translate: TranslateService, http: HttpClient) {
    super(translate, http, 'landing', 'landing');
  }
}

export interface iLanding {
  home: iHome;
}

export interface iHome {
  title: string;
  sub_title: string;
  button: string;
  not_register: string;
  link: string;
}
