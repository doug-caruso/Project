import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscaExcursao } from './busca-excursao';

@NgModule({
  declarations: [
    BuscaExcursao,
  ],
  imports: [
    IonicPageModule.forChild(BuscaExcursao),
  ],
  exports: [
    BuscaExcursao
  ]
})
export class BuscaExcursaoModule {}
