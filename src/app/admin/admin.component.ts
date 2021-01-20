import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  printConsole(){
    obj.geet();
  }
  //start Operator  
  newResult;
operatorAdd(value1,value2)
{
  obj1.add(value1,value2)
   this.newResult=result;
}
operatorSub(value1,value2){
  obj1.sub(value1,value2)
  this.newResult=result;
}
operatorMul(value1,value2){
  obj1.mul(value1,value2)
  this.newResult=result;
}
operatorDiv(value1,value2){
  obj1.div(value1,value2)
  this.newResult=result;
}
operatorMod(value1,value2){
  obj1.mod(value1,value2)
  this.newResult=result;
}
//End Operator

}
class calc{
  add(num1,num2){
    result =(+num1)+(+num2)
    console.log(result)
  }
  sub(num1,num2){
    result=(num1)-(+num2)
  }
  mul(num1,num2){
    result=(num1)*(+num2)
  }
  div(num1,num2){
    result=(num1)/(+num2)
  }
  mod(num1,num2){
    result=(num1)%(+num2)
  }
}
class Greeting{
  geet(){
    console.log("Hello i'm form geet method from Greeting class.");
  }
}

var obj1 = new calc()
var obj = new Greeting()
var result;