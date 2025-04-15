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
export abstract class GenericTranslateService<T> implements OnDestroy {
  private langChangeSubscription: Subscription;
  translations$ = new BehaviorSubject<T | null>(null);

  protected basePath = '';
  protected translationKey = '';

  constructor(
    protected translate: TranslateService,
    protected http: HttpClient,
    protected basePathGeneric: string,
    protected translationKeyGeneric: string
  ) {
    this.basePath = basePathGeneric;
    this.translationKey = translationKeyGeneric;
    this.loadTranslations().subscribe();

    this.langChangeSubscription = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.loadTranslations(event.lang).subscribe({
          next: (translations) => this.translations$.next(translations),
          error: (err) =>
            console.error(
              `Errore nel caricamento delle traduzioni per ${event.lang}:`,
              err
            ),
        });
      }
    );
  }

  loadTranslations(changedLang?: string): Observable<T> {
    const lang =
      changedLang ||
      this.translate.currentLang ||
      this.translate.getDefaultLang();

    return this.loadTranslationsForLang(lang).pipe(
      catchError((error) => {
        console.error('Errore nel caricamento delle traduzioni:', error);
        return of(this.translations$.getValue() || ({} as T));
      })
    );
  }

  protected loadTranslationsForLang(lang: string): Observable<T> {
    console.log(this.basePath);
    console.log(lang);

    const url = `./i18n/${this.basePath}/${lang}.json`;
    return this.http.get<{ [key: string]: T }>(url).pipe(
      tap((data: { [key: string]: T }) => {
        this.translate.setTranslation(lang, data, true);
        if (this.translate.currentLang !== lang) {
          this.translate.use(lang);
        }

        this.translations$.next(data[this.translationKey]);
      }),

      map(() => this.getTranslations())
    );
  }

  protected getTranslations(): T {
    return this.translate.instant(this.translationKey) as T;
  }

  setBasePath(path: string): void {
    this.basePath = path;
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
