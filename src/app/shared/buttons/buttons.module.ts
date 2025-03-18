import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicButtonComponent } from './basic-button/basic-button.component';

@NgModule({
  declarations: [BasicButtonComponent],
  imports: [CommonModule],
  exports: [BasicButtonComponent],
})
export class ButtonsModule {}
