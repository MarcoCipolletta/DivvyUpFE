import { Component } from '@angular/core';
import { Terms, InfoTranslateService } from '../info-translate.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss',
})
export class PrivacyComponent {
  translate!: Terms;
  constructor(private infoTranslateSvc: InfoTranslateService) {
    this.infoTranslateSvc.translations$.subscribe((data) => {
      if (!data) return;

      this.translate = data.privacy;
    });
  }
}
