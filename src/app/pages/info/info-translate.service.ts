import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { GenericTranslateService } from '../../services/translate/generic-translate.service';

@Injectable({
  providedIn: 'root',
})
export class InfoTranslateService extends GenericTranslateService<Info> {
  constructor(translate: TranslateService, http: HttpClient) {
    super(translate, http, 'info', 'info');
  }
}

export interface iInfo {
  info: Info;
}

export interface Info {
  terms: Terms;
  privacy: Terms;
}

export interface Terms {
  title: string;
  sections: Section[];
}

export interface Section {
  heading: string;
  content: string;
}
