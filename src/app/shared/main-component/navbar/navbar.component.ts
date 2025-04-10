import { Component } from '@angular/core';
import { ToggleDarkService } from '../../../services/toggle-dark.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(
    private toggleDarkSvc: ToggleDarkService,
    private route: Router
  ) {}

  private getRoute(): boolean {
    return this.route.url === '/auth';
  }

  get text() {
    if (this.getRoute()) {
      return 'Home';
    }
    return 'Login';
  }

  get link() {
    if (this.getRoute()) {
      return '';
    }
    return '/auth';
  }
  get currentTheme() {
    return this.toggleDarkSvc.theme;
  }
  toggleTheme() {
    this.toggleDarkSvc.toggleTheme();
  }
}
