import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
  {
    title: 'Binding',
    icon: 'book',
    url: '/exemple1'
  },
  {
    title: 'Event',
    icon: 'flash',
    url: '/exemple3'
  },
  {
    title: 'Counter',
    icon: 'alarm',
    url: '/exo1'
  },
  {
    title: '*ngIf',
    icon: 'heart',
    url: '/exemple4'
  },
  {
    title: '*ngFor',
    icon: 'finger-print',
    url: '/exemple5'
  },
  {
    title: 'Binding 2 Ways',
    icon: 'wine',
    url: '/exemple6'
  },
  {
    title: 'Shopping List',
    icon: 'paper',
    url: '/exo2'
  },
  {
    title: 'Meteo',
    icon: 'ice-cream',
    url: '/exemple7'
  },
  {
    title: 'Pokemon',
    icon: 'logo-octocat',
    url: '/exo3'
  },
  {
    title: 'Camera',
    icon: 'barcode',
    url: '/camera'
  }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
