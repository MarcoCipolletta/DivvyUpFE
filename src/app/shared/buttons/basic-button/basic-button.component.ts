import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-button',
  templateUrl: './basic-button.component.html',
  styleUrl: './basic-button.component.scss',
})
export class BasicButtonComponent {
  @Input() text = '';
  ripple(e: MouseEvent) {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ripples = document.createElement('span');
    ripples.className =
      // `left-[${x}px] top-[${y}px]` +
      ' absolute bg-white -translate-x-1/2 -translate-y-1/2 rounded-full animate-ripple';
    ripples.style.left = `${x}px`;
    ripples.style.top = `${y}px`;
    target.appendChild(ripples);
  }
}
