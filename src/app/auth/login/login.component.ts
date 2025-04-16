import { Component, OnInit } from '@angular/core';

import { AuthTranslateService, iLogin } from '../auth-translate.service';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  translation!: iLogin;

  loginForm = new FormGroup({
    identifier: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authTranslateSvc: AuthTranslateService,
    private authSvc: AuthService
  ) {}

  ngOnInit() {
    this.authTranslateSvc.translations$.subscribe((translations) => {
      if (!translations) return;
      this.translation = translations.login;
    });
  }

  login() {
    if (!this.loginForm.valid) {
      alert('Inserire le credenziali');
      return;
    }
    console.log('Login');
  }
}
