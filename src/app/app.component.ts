import { Component } from '@angular/core';
import { ToggleDarkService } from './services/toggle-dark.service';
import { LanguageService } from './services/translate/language.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private toggleDarkSvc: ToggleDarkService,
    private languageSvc: LanguageService,
    private authService: AuthService
  ) {
    window.addEventListener('resize', this.setViewPort);
    this.setViewPort();
  }

  ngOnInit() {
    // imposto qui il base url di authSvc per non andare in dipendenza circolare
    this.languageSvc.baseUrl$.subscribe((url) => {
      this.authService.setBaseUrl(url + 'auth/');
    });
  }

  toggleDark() {
    this.toggleDarkSvc.toggleTheme();
  }

  //calcolo l'altezza effettiva della viewport(serve in particolare su mobile)
  setViewPort() {
    const vh = window.visualViewport
      ? window.visualViewport.height * 0.01
      : window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
}
