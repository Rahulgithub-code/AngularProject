import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = '';
  setValue() { this.name = 'Millie Bobby Brown'; }
  name2 = '';
  onSubmit(it: NgForm){
    console.log(it.value);
    console.log(it.valid);
  }
  value=""
  clearValue(){
    this.value=""
  }
  items: item[] = [{name: 'One',val: 1}, {name: 'Two', val: 2},{name: 'Three', val:3}]
  selectedValue:string = 'One';

}
class item{
  name:string;
  val: number;
}