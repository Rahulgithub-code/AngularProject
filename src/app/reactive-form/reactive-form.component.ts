import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'
import { formsignup } from '../formsignup';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  regForm:FormGroup;
   Name:string
   email:string
   password:string
   cpassword:string


  constructor(formbuilder: FormBuilder) { 
    //   *** Simple Form without validation ***
    // this.regForm = formbuilder.group({
    //   Name:new FormControl(),
    //   email:new FormControl(),
    //   password:new FormControl(),
    //   cpassword:new FormControl(),

    // })

    /**  Form with Validation  */
     this.regForm= formbuilder.group({
      Name: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      cpassword: ['', Validators.required]
    })

  }

  ngOnInit(): void {

    /** this.regForm.get('Name').valueChanges.subscribe(   // valueChanges on specific field
      uname => {
        console.log('Name changes :'+uname)
      }
    )*/ 

   /**  this.regForm.valueChanges.subscribe(      // valueChanges on all field
      (formData:formsignup)=>{
        console.log('Name changes: '+ formData.Name)
        console.log('email changes: '+ formData.email)
        console.log('password changes: '+ formData.password)
        console.log('cpassword changes: '+ formData.cpassword)
      }
    )*/

   /**  this.regForm.get('Name').statusChanges.subscribe(   // statusChanges on specific field
      uname => {console.log('Name :' + uname)}
    )*/

   /** this.regForm.statusChanges.subscribe(       // statusChanges on form status
      form => {
        console.log('Form status: ' + form)
      }
    )*/

  }
  onClickBtn(regForm:any){
    console.log(regForm.controls) 
    this.Name=this.regForm.get('Name').value;  // get only specific field value 
    console.log(this.Name);
    console.log(this.regForm.value)  // get all field value

  }
  reset(){
    this.regForm.reset();    //normal reset
   /**  this.regForm.reset({       //reset with assign value 
      email: 'xyz@mail.com'
    });
    
  */
  }
  fill(){
    this.regForm.setValue({       //must assign all field value
      Name: 'Rahul',
      email: 'rahulkr.mits@gmail.com',
      password: 1234,
      cpassword: 1234
    })

    /**this.regForm.patchValue({   //not required for assign all field value
      Name: 'Rahul',
      password: 1234,
      cpassword: 1234
    })*/
  } 
}
