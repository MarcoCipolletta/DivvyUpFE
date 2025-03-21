import { Component } from '@angular/core';
import { ToggleDarkService } from '../../../services/toggle-dark.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private toggleDarkSvc: ToggleDarkService) {}

  get currentTheme() {
    return this.toggleDarkSvc.theme;
  }
  toggleTheme() {
    this.toggleDarkSvc.toggleTheme();
  }
}
