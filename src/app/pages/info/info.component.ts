import { Component } from '@angular/core';
import { InfoTranslateService } from './info-translate.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  constructor(private infoTranslateSvc: InfoTranslateService) {
    this.infoTranslateSvc.loadTranslations();
  }
}
