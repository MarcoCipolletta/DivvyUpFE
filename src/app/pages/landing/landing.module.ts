import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { ButtonsModule } from '../../shared/buttons/buttons.module';
import { NgIcon } from '@ng-icons/core';
import { MainComponentsModule } from '../../shared/main-component/main-components.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ButtonsModule,
    NgIcon,
    MainComponentsModule,
  ],
})
export class LandingModule {}
