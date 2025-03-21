import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { BehaviorSubject, Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language = 'it';
  url = environment.baseUrl;
  baseUrl$ = new BehaviorSubject<string>(this.url + this.language + '/');

  constructor(private translate: TranslateService) {
    const browserLang = this.translate.getBrowserLang();
    this.language = browserLang === 'it' ? 'it' : 'en';
    this.setLanguage(this.language);
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    this.baseUrl$.next(this.url + lang + '/');
  }

  toggleLanguage() {
    this.language = this.language === 'it' ? 'en' : 'it';
    this.setLanguage(this.language);
  }
}
