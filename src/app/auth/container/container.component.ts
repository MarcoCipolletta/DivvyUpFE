import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent {
  @ContentChild(TemplateRef) contentTemplate!: TemplateRef<any>;
  @Input() title!: string;
  @Input() subTitle!: string;
}
