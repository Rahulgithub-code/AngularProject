import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameter-page',
  templateUrl: './parameter-page.component.html',
  styleUrls: ['./parameter-page.component.scss']
})
export class ParameterPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //Start Default parameter
dParam(city,state='JH'){
  return alert(city + (" ") + state)
}
//End Default Parameter
// Start Optional Parameter function
optParam(param1,param2,param3?){
  //return alert(param1 + (" ") + param2 + (" ")  +param3)
  return alert(`${param1} ${param2} ${param3}`)
}
// End Optional Parameter function

//Rest Parameter Start
restParam(...num){
  return alert(num)
} 
restAddResult;
restAdd(...num){
  var i;
  var sum =0;
  for(i=0;i<num.length;i++){
    sum=(+sum) + (+num[i])
  }
  console.log(typeof(num))
  this.restAddResult = sum
}
//End Rest Parameter Start 

}
