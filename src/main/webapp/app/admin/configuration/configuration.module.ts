import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipsterProjetGestionPatientSharedModule } from 'app/shared/shared.module';

import { ConfigurationComponent } from './configuration.component';

import { configurationRoute } from './configuration.route';

@NgModule({
  imports: [JhipsterProjetGestionPatientSharedModule, RouterModule.forChild([configurationRoute])],
  declarations: [ConfigurationComponent],
})
export class ConfigurationModule {}
