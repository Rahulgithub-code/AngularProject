import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-page',
  templateUrl: './switch-page.component.html',
  styleUrls: ['./switch-page.component.scss']
})
export class SwitchPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //Start switch case statement
  
  block='rgb(247, 234, 234)';
  changeColorWithSwitch(color:string){
    switch (color) {
      case 'red':{
        this.block=color;
        console.log(color)
        break
      }
      case 'blue': {
        this.block=color;
        break
      }
      case 'skyblue': {
        this.block=color;
        break
      }
      case 'pink': {
        this.block=color;
        break
      }
      case 'orange': {
        this.block=color;
        break
      }
      default:{
        this.block='white';
      }
    }
  }
  //End switch case statement

}
