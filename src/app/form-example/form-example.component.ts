import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getValue(formData:NgForm){
    console.log(formData)
  }

}
