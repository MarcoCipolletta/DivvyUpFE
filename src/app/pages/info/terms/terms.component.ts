import { Component } from '@angular/core';
import { InfoTranslateService, Terms } from '../info-translate.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss',
})
export class TermsComponent {
  translate!: Terms;
  constructor(private infoTranslateSvc: InfoTranslateService) {
    this.infoTranslateSvc.translations$.subscribe((data) => {
      if (!data) return;

      this.translate = data.terms;
    });
  }
}
