import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language = 'it';
  url = environment.baseUrl;
  baseUrl$ = new BehaviorSubject<string>(this.url + this.language + '/');

  constructor() {}

  toggleLanguage() {
    this.language = this.language === 'it' ? 'en' : 'it';
    this.baseUrl$.next(this.url + this.language + '/');
  }
}
