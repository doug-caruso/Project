import { Evento } from './../evento/evento';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'busca-page',
  templateUrl: 'busca.html'
})
export class Busca {

  constructor(public navCtrl: NavController) {

  }


  openEvent(){
    this.navCtrl.push(Evento)
  }
}
