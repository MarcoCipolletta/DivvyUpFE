import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './auth/token.interceptor';
import { NavbarComponent } from './main-component/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideHttpClient(withInterceptors([tokenInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {}
