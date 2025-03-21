import { Component } from '@angular/core';
import { ToggleDarkService } from './services/toggle-dark.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private toggleDarkSvc: ToggleDarkService) {
    window.addEventListener('resize', this.setViewPort);
    this.setViewPort();
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
