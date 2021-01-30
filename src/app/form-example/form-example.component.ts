import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';


@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormExampleComponent implements OnInit {
  term:string = "'Terms and Conditions Welcome to Website Name! These terms and conditions outline the rules and regulations for the use of Company Names Website'"

  constructor() { }

  ngOnInit(): void {
  }
  getValue(formData:NgForm){
    console.log(formData.value)
  }
  example1='block'
  example2='none'
  enableExample2(){
    this.example2='block'
    this.example1='none'
  }
  enableExample1(){
    this.example2='none'
    this.example1='block'
  }

  /** Example 2 */
  user= new User()
  onFormSubmit(form:NgForm){
    if(form.invalid){
      return
    }
    console.log(form.value)
  }
  setDefaultValues(){
    this.user.name='Rahul';
    this.user.email='rahulkr.mits@gmail.com';
    this.user.isMarried=false;
    this.user.gender='male';
    this.user.isTCAccepted=true
    this.user.password=1234
    this.user.cpassword=1234
  }
  reset(form:NgForm){
    this.user= new User()
    form.resetForm()
  }
}
