import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventoExcursao } from './evento-excursao';

@NgModule({
  declarations: [
    EventoExcursao,
  ],
  imports: [
    IonicPageModule.forChild(EventoExcursao),
  ],
  exports: [
    EventoExcursao
  ]
})
export class EventoExcursaoModule {}
