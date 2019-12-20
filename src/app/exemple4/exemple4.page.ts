import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemple4',
  templateUrl: './exemple4.page.html',
  styleUrls: ['./exemple4.page.scss'],
})
export class Exemple4Page implements OnInit {

  collapsed = true;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.collapsed = !this.collapsed;
  }
}
