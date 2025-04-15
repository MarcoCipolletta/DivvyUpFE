import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthTranslateService, iLogin } from '../auth-translate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  translation!: iLogin;

  constructor(private authTranslateSvc: AuthTranslateService) {}

  ngOnInit() {
    this.authTranslateSvc.translations$.subscribe((translations) => {
      if (!translations) return;
      this.translation = translations.login;
    });
  }
}
