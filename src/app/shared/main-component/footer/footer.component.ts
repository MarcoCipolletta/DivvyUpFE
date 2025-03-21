import { LanguageService } from './../../../services/translate/language.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(private languageSvc: LanguageService) {}

  setLanguage(lang: string) {
    this.languageSvc.setLanguage(lang);
  }
}
