import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { ButtonsModule } from '../../shared/buttons/buttons.module';
import { NgIcon } from '@ng-icons/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [LandingComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, LandingRoutingModule, ButtonsModule, NgIcon],
})
export class LandingModule {}
