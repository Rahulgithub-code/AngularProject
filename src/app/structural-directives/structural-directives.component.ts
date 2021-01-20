import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {
  isAvailable:boolean=true;
  months = ["January", "February", "March", "April", "May", "June", "July", 
      "August", "September", "October", "November", "December"];
  color='red'
  fruits = [
    { name: 'MangoPineapple', price: '100', quantity: '2' },
    { name: 'Grapes', price: '900', quantity: '5' },
    { name: 'Melons', price: '220', quantity: '3' },
    { name: 'Dekopon', price: '1400', quantity: '4' },
    { name: 'Apple', price: '800', quantity: '6' }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
  changeIsAvailable(){
    this.isAvailable=!this.isAvailable;
  }
  changeMonths(){
    alert("Months change from the DropDown")
  }
  trackByFn(index, item) {
    console.warn(index,item);
  }

}
