import { Component } from '@angular/core';
import { ToggleDarkService } from './services/toggle-dark.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private toggleDarkSvc: ToggleDarkService) {}

  toggleDark() {
    this.toggleDarkSvc.toggleDark();
  }
}
