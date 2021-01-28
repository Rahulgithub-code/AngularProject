import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  constructor() {
    console.log("im Constructor");
   }
  ngOnInit() {
    console.log("I'm ngOnInit.");
  }
//factorial start
  public factValue;
  public factResult;
  factFunct(){
    let value:number=this.factValue, result:number=1,i:number;
    for(i=1;i<=value;i++){
     result=result*i;
    }
    this.factResult = result
  }
// factorial end
//start find prime number
public primeValue;
public primeResult;
primeFunct(){
  let i:number, count:number=0, value:number=this.primeValue
  for(i=1;i<=value;i++){
    if(value%i==0) //checking whether reminder of value is 0 or not  
    {
      count++
    }
  }
  if(count==2){    //checking whether count is equal to 2 or not because in prime 
                   //number divide fector is only two
    this.primeResult= this.primeValue + " is Prime number"
  }
  else{
    this.primeResult=this.primeValue + " is not a Prime number"
  }
}
//end find prime number

//start palindrome number
palinValue:number;
palinResult;
palinFunct(){
  let value:number=this.palinValue, temp, reverse:number=0, rem:number
  temp=value;
  while(temp>0)
  {
    rem = temp%10;  // getting last digit from temp 
    reverse = reverse*10+rem;  // assign reverse number in sequence
    temp=Math.floor(temp/10);  //removing last digit from temp 
                              //& math.floor for removing after decimal value part
  }
  if(value==reverse){
    this.palinResult = " Given number is Palindrome number"
  }
  else{
    this.palinResult = " Given number is not a Palindrome number"
  }

}
//end palindrome number

//start Fibonacci series 
fabonacciValue;
fabonacciResult:any[]=[];
fabonacciFunct(){
  var f=0, l=1, next=null, no:number=parseInt(this.fabonacciValue), series:any[]=[]
  for(let i=0; i<no; i++){
    if(i<=0){
      next = i
    }
    else{
      next = f+l;
      f=l
      l=next
    }
    series.push(next)
    
  }
  this.fabonacciResult = series

}



//end Fibonacci series


}
