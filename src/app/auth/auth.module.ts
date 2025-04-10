import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginOauthSuccessComponent } from './login-oauth-success/login-oauth-success.component';
import { RegisterComponent } from './register/register.component';
import { MainComponentsModule } from '../shared/main-component/main-components.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AuthComponent, LoginOauthSuccessComponent, RegisterComponent, LoginComponent],
  imports: [CommonModule, AuthRoutingModule, MainComponentsModule],
})
export class AuthModule {}
