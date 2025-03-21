import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    ButtonsModule,
    RouterModule,
    TranslateModule.forChild(),
  ],
  exports: [NavbarComponent, FooterComponent],
})
export class MainComponentsModule {}
