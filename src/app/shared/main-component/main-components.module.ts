import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonsModule } from '../buttons/buttons.module';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, ButtonsModule],
  exports: [NavbarComponent, FooterComponent],
})
export class MainComponentsModule {}
