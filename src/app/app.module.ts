import { EventoExcursao } from './../pages/evento-excursao/evento-excursao';
import { Organizador } from './../pages/organizador/organizador';
import { Home } from './../pages/home/home';
import { Busca } from './../pages/busca/busca';
import { BuscaExcursao } from './../pages/busca-excursao/busca-excursao';
import { Evento } from './../pages/evento/evento';
import { Cadastro } from './../pages/cadastro/cadastro';

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Ionic2RatingModule } from 'ionic2-rating';


@NgModule({
  declarations: [
    BuscaExcursao,
    Cadastro,
    Evento,
    EventoExcursao,
    MyApp,
    Home,
    Organizador,
    Busca,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BuscaExcursao,
    Cadastro,
    Evento,
    EventoExcursao,
    MyApp,
    Home,
    Organizador,
    Busca,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
