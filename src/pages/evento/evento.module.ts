import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Evento } from './evento';

@NgModule({
  declarations: [
    Evento,
  ],
  imports: [
    IonicPageModule.forChild(Evento),
  ],
  exports: [
    Evento
  ]
})
export class EventoModule {}
