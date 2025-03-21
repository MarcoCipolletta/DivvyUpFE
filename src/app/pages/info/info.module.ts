import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponentsModule } from '../../shared/main-component/main-components.module';

@NgModule({
  declarations: [
    InfoComponent,
    TermsComponent,
    PrivacyComponent,
    ContactComponent,
  ],
  imports: [CommonModule, InfoRoutingModule, MainComponentsModule],
})
export class InfoModule {}
