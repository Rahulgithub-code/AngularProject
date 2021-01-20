import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-function-page',
  templateUrl: './function-page.component.html',
  styleUrls: ['./function-page.component.scss']
})
export class FunctionPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //Start Anonymous function
anonyMultResult;
multiply=function(num1,num2){
  return num1*num2
}
anonFuncton(num1,num2){
  this.anonyMultResult=this.multiply(num1,num2);
}
//End Anonymous Function
//Start Lemda Function
LemResult;
LemValue = (num1,num2) => {return num1*num2}
lemFunct(num1,num2){
  this.LemResult=this.LemValue(num1,num2)
}
//End Lemda Function
value1;
value2;
OverLoadingFunct(){
  console.log(typeof(this.value1))
  console.log(typeof(this.value2))
  console.log(this.value1)
  console.log(this.value2)
  add(this.value1,this.value2)
}
}
function add(a:string, b:string):string;
function add(a:number, b:number):number
function add(a:any,b:any):any {
  if(typeof(a)=='string' && typeof(b)=='string'){
    console.log("Im from 1st function")
    alert("Im from 1st function")
  }
  else if (typeof(a)=='number' && typeof(b)=='number'){
    console.log("Im from 2nd function")
    alert("Im from 2nd function")
  }
  else{
    console.log("Im from 3rd function")
    alert("Im from 3rd function")
  }
}