import { Cadastro } from './../cadastro/cadastro';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'organizador-page',
  templateUrl: 'organizador.html'
})
export class Organizador {

  constructor(public navCtrl: NavController) {

  }

  openCadastro(){
    this.navCtrl.push(Cadastro)
  }

}
