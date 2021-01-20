import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator-page',
  templateUrl: './operator-page.component.html',
  styleUrls: ['./operator-page.component.scss']
})
export class OperatorPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Start relational operator
  compare;
  rOperator(num3,num4)
  {
    if((+num3)>(+num4)){
      this.compare=num3 + " is greater then " + num4
    }
    else if((+num3)==(+num4)){
      this.compare=num3 + " is equal to " + num4
    }
    else{
      this.compare=num3 + " is less then " + num4
    }
  }
  //End relational operator

  //Start Conditional operator
  cResult;
  cOperator(num5,num6){
    this.cResult=(+num5)>(+num6) ? 
                  num5 +" is greater than "+ num6 : (+num5)==(+num6) ? num5 +" is equal to " + num6 : num5 +" is less than " + num6
  }
  //End Conditional operator
  //Start Odd/Even using Relational Operator
  oddEvenResult;
  oddEvenFunc(num){
    this.oddEvenResult = (num % 2 == 0)? num + " is Even number" : num + " is Odd number"

  }
  //End Odd/Even using Relational Operator
}
