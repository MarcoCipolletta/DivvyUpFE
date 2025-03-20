import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginOauthSuccessComponent } from './login-oauth-success/login-oauth-success.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginOauthSuccessComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
