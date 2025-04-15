import { iHome, LandingTranslateService } from './landing-translate.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  constructor(private landingTranslateSvc: LandingTranslateService) {}
  translation!: iHome;
  ngOnInit() {
    this.landingTranslateSvc.translations$.subscribe((translations) => {
      if (!translations) return;
      this.translation = translations.home;
    });
  }
}
