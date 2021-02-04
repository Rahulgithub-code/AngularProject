import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'app-http-crud',
  templateUrl: './http-crud.component.html',
  styleUrls: ['./http-crud.component.scss']
})
export class HttpCrudComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'address', 'action'];
  imgUrl = '/assets/images/Loading.gif'
  dataSaved:boolean=false;
  userFormData:FormGroup
  allUser:Observable<User[]>;


  constructor(private formbuilder:FormBuilder,private userService: UserService) { }

  ngOnInit(): void {
    this.userFormData=this.formbuilder.group(
      {
        name: ['',[Validators.required]],
        email: ['',[Validators.required, Validators.email]],
        address: ['', [Validators.required]]
      }
    )
    this.getData();
  }

  getData() {
    // this.userService.getUserDataFromMemory().subscribe(user => {
    //   this.userData = user
    //   console.log(this.userData)
    // })
    this.allUser = this.userService.getUserDataFromMemory()
  }
 public onClickSubmit(){
   
   this.dataSaved=false;
   let user=this.userFormData.value
   this.createUser(user)
   this.userFormData.reset()
   
 }
 createUser(user:User){
   if(this.userIdToUpdate==null){
    this.userService.createUser(user).subscribe(user => {
      this.dataSaved=true;
      this.getData()
      this.userIdToUpdate=null
    })
   }
   else {
     user.id = this.userIdToUpdate;
     this.userService.updateUser(user).subscribe(user => {
       this.dataSaved==true;
       this.getData()
       this.userIdToUpdate=null
     })
   }
 }

 userIdToUpdate=null
 edit(userId){
   this.userService.getUserId(userId).subscribe(user=> {
     this.userIdToUpdate=userId
     this.userFormData.controls['name'].setValue(user.name);
     this.userFormData.controls['email'].setValue(user.email);
     this.userFormData.controls['address'].setValue(user.address);
    })
 }
 deleting(userId){
   this.userService.deleteUser(userId).subscribe(user => {
     this.getData()
   })

 }
}
