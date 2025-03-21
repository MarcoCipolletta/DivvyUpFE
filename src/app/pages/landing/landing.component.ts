import { LandingTranslateService } from './landing-translate.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  constructor(private landingTranslateSvc: LandingTranslateService) {
    this.landingTranslateSvc.loadTranslations();
  }
}
