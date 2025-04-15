import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import {
  BehaviorSubject,
  Observable,
  Subscription,
  catchError,
  map,
  of,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthTranslateService implements OnDestroy {
  private langChangeSubscription: Subscription;
  translations$ = new BehaviorSubject<iAuth | null>(null);

  constructor(private translate: TranslateService, private http: HttpClient) {
    this.loadTranslations().subscribe();

    this.langChangeSubscription = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.loadTranslations(event.lang).subscribe({
          next: (translations) => {
            this.translations$.next(translations);
          },
          error: (err) => {
            console.error(
              `Errore nel caricamento delle traduzioni per ${event.lang}:`,
              err
            );
          },
        });
      }
    );
  }

  loadTranslations(changedLang?: string): Observable<iAuth> {
    const lang =
      changedLang ||
      this.translate.currentLang ||
      this.translate.getDefaultLang();

    return this.loadTranslationsForLang(lang).pipe(
      catchError((error) => {
        console.error(`Errore nel caricamento delle traduzioni:`, error);
        return of(this.translations$.getValue() || ({} as iAuth));
      })
    );
  }

  private loadTranslationsForLang(lang: string): Observable<iAuth> {
    return this.http.get<{ auth: iAuth }>(`./i18n/auth/${lang}.json`).pipe(
      tap((data: { auth: iAuth }) => {
        this.translate.setTranslation(lang, data, true);

        if (this.translate.currentLang !== lang) {
          this.translate.use(lang);
        }

        this.translations$.next(data.auth);
      }),
      map(() => this.getTranslations())
    );
  }

  private getTranslations(): iAuth {
    return this.translate.instant('auth') as iAuth;
  }

  ngOnDestroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}

// Interfacce di traduzione
export interface iLogin {
  h2: string;
  'sub-title': string;
  identifier: string;
  enter: string;
  or: string;
  google: string;
  remember: string;
  forgot: string;
  'not-register': {
    title: string;
    link: string;
  };
}

export interface iAuth {
  login: iLogin;
}
