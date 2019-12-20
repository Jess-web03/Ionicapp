import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemple5',
  templateUrl: './exemple5.page.html',
  styleUrls: ['./exemple5.page.scss'],
})
export class Exemple5Page implements OnInit {

  list= [
    'pommes', 'poires', 'prunes', 'bananes'
  ];

  constructor() { }

  ngOnInit() {
  }

}
