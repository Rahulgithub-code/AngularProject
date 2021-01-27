import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  regForm:FormGroup;
  // Name:string
  // email:string
  // password:string
  // cpassword:string


  constructor(formbuilder: FormBuilder) { 
    //   *** Simple Form without validation ***
    // this.regForm = formbuilder.group({
    //   Name:new FormControl(),
    //   email:new FormControl(),
    //   password:new FormControl(),
    //   cpassword:new FormControl(),

    // })

    // *** Form with Validation  ***
    this.regForm= formbuilder.group({
      Name: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      cpassword: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  onClickBtn(regForm:any){
    console.log(regForm.controls)

  }

}
