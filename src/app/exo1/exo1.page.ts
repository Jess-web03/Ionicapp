import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.page.html',
  styleUrls: ['./exo1.page.scss'],
})
export class Exo1Page implements OnInit {

  counter= 0;

  timerID;

  started = false;
  

  constructor() { }

  ngOnInit() {
  }
    start(){
      this.started =true;
      this.timerID = setInterval(() => {
        this.counter++;
      }, 1000);
    }
    stop(){
      this.started = false;
      clearInterval(this.timerID);
    }
    reset(){
      this.counter = 0;
      this.stop();
    }

}
