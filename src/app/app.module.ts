import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './auth/token.interceptor';
import { NavbarComponent } from './main-component/navbar/navbar.component';
import { ButtonsModule } from './shared/buttons/buttons.module';
import { NgIconsModule } from '@ng-icons/core';
import { iconoirSettings } from '@ng-icons/iconoir';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    NgIconsModule.withIcons({ iconoirSettings }),
  ],
  providers: [provideHttpClient(withInterceptors([tokenInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {}
