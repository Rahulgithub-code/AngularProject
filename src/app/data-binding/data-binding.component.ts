import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  print="Image's"
  itemImageUrl='assets/images/angular.jpg'
  imageUrl="/assets/images/linux.png"
  inputBox:boolean;
  inputValue="Enter here"
  colspan:number=3
  border:number=3

  //Function declaration
  AlertBox(){
    alert("Hello Event");
  }
  changeImage(){
    this.imageUrl="/assets/images/angular.png"
   }
   changeInputBox()
   {
    this.inputBox=!this.inputBox
   }

}
