import { Organizador } from './../organizador/organizador';
import { Home } from './../home/home';
import { Busca } from './../busca/busca';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Busca;
  tab2Root = Home;
  tab3Root = Organizador;

  constructor() {

  }
}
