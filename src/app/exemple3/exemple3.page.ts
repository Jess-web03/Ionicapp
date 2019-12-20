import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemple3',
  templateUrl: './exemple3.page.html',
  styleUrls: ['./exemple3.page.scss'],
})
export class Exemple3Page implements OnInit {

  nombre = 0;
  isHighlighted = false;
  
  constructor() { }

  ngOnInit() {
  }
  ajouter(){
    this.nombre++;
  }
  diminuer(){
    this.nombre--;
  }
  highlight(){
    this.isHighlighted = true;
  }
}
