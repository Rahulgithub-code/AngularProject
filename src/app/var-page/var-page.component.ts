import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-var-page',
  templateUrl: './var-page.component.html',
  styleUrls: ['./var-page.component.scss']
})
export class VarPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cVar="Class variable" //class variable
  ggVar=gVar; // Global variable
  lVarFunc(){
    var lVar="Local Variable"; //Local variable
    console.warn(lVar);
    console.warn(typeof(lVar))
  }

}
var gVar="Global variable"