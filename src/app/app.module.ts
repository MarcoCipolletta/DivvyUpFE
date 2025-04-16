import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HttpClient,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { tokenInterceptor } from './auth/token.interceptor';
import { ButtonsModule } from './shared/buttons/buttons.module';
import { NgIconsModule } from '@ng-icons/core';
import { iconoirSearch, iconoirSettings } from '@ng-icons/iconoir';
import { bootstrapGoogle } from '@ng-icons/bootstrap-icons';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './services/translate/HttpLoaderFactory';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    NgIconsModule.withIcons({
      iconoirSettings,
      iconoirSearch,
      bootstrapGoogle,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'it', // Imposta la lingua di default
    }),
  ],
  providers: [provideHttpClient(withInterceptors([tokenInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {}
