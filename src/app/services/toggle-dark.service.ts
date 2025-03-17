import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleDarkService {
  constructor() {}

  toggleDark() {
    window.document.body.classList.toggle('dark');
  }
}
