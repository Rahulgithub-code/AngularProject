import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop-page',
  templateUrl: './loop-page.component.html',
  styleUrls: ['./loop-page.component.scss']
})
export class LoopPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Start Factorial using For Loop
  fResult;
FactFor(num7){
  var num=num7;
  var i;
  var factorial=1;
  for(i=num;i>=1;i--){
    factorial *= i;
    console.log(factorial);
  }
  console.log(factorial);
  this.fResult=factorial;
}
  //End Factorial using For Loop

  //Start For...in Loop
  arrayNum=['1','2','3','4','5','6']
  i;
  forInLoopFunc(){
    for(this.i in this.arrayNum){
      console.log(this.arrayNum[this.i])
    }
  }
  //End For...in Loop

   // start Factorial using while loop
   whileFactResult;
   whileFact(num){
     var factorial=1
     while(num>=1){
       factorial=factorial*num
       num--;
     }
     this.whileFactResult=factorial;
     
   }
 
   //End Factorial using while loop
   // start do...while 
doNumber(){
  var i =5;
  do {
    console.log(i)
    i--
    
  } while (i>=0);
}
// End do...while 
  
}
