import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemple1',
  templateUrl: './exemple1.page.html',
  styleUrls: ['./exemple1.page.scss'],
})
export class Exemple1Page implements OnInit {

  maVariable ="World";
  
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.maVariable ="Khun";
    }, 5000)
  }

}
