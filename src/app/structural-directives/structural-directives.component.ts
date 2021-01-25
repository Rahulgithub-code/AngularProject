import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {
  isAvailable: boolean = true;
  months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
  color = 'red'
  fruits = [
    { id: 1, name: 'MangoPineapple', price: '100', quantity: '2' },
    { id: 2, name: 'Grapes', price: '900', quantity: '5' },
    { id: 3, name: 'Melons', price: '220', quantity: '3' },
    { id: 4, name: 'Dekopon', price: '1400', quantity: '4' },
    { id: 5, name: 'Apple', price: '800', quantity: '6' }
  ]



  ngOnInit(): void {
  }

  changeIsAvailable() {
    this.isAvailable = !this.isAvailable;
  }
  changeMonths() {
    alert("Months change from the DropDown")
  }
  fruitsNew = [
    { id: 1, name: 'MangoPineapple', price: '100', quantity: '2' },
    { id: 2, name: 'Grapes', price: '900', quantity: '5' },
    { id: 3, name: 'Melons', price: '220', quantity: '3' },
    { id: 4, name: 'Dekopon', price: '1400', quantity: '4' },
    { id: 5, name: 'Apple', price: '800', quantity: '6' }
  ]

  getMoreFruit() {
    this.fruitsNew = [
      { id: 1, name: 'MangoPineapple', price: '100', quantity: '2' },
      { id: 2, name: 'Grapes', price: '900', quantity: '5' },
      { id: 3, name: 'Melons', price: '220', quantity: '3' },
      { id: 4, name: 'Dekopon', price: '1400', quantity: '4' },
      { id: 5, name: 'Apple', price: '800', quantity: '6' },
      { id: 6, name: 'Banana', price: '60', quantity: '1' },
      { id: 7, name: 'Orange', price: '150', quantity: '2' },
      { id: 8, name: 'Mango', price: '500', quantity: '5' }]
  }
  trackById(index: number, fruits: any): string {
    return fruits.id
  }

  countryDetails:any[] = [
    {
      'name': 'India',
      'person': [
        {
          'name': 'Rahul',
        },
        {
          'name': 'Vipul'
        },
        {
          'name': 'Ram'
        }
      ]
    },
    {
      'name': 'USA',
      'person': [
        {
          'name': 'Sam'
        },
        {
          'name': 'Sarah'
        },
        {
          'name': 'Justin'
        }
      ]
    },
    {
      'name': 'UK',
      'person': [
        {
          'name': 'Adam'
        },
        {
          'name': 'Kevin'
        },
        {
          'name': 'Peter'
        }
      ]
    }
  ]
  constructor() {
    console.log(this.countryDetails)
  }
}
