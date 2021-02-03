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
  userData: User[];
  displayedColumns: string[] = ['id', 'name', 'email', 'address', 'action'];
  imgUrl = '/assets/images/Loading.gif'
  dataSaved:boolean=false;
  userFormData:FormGroup
  allUser:Observable<User[]>;


  constructor(private formbuilder:FormBuilder,private userService: UserService) { }

  ngOnInit(): void {
    this.getData();
    this.userFormData=this.formbuilder.group(
      {
        name: [null,[Validators.required]],
        email: [null,[Validators.required]],
        address: [null, [Validators.required]]
      }
    )
  }

  getData() {
    this.userService.getUserDataFromMemory().subscribe(user => {
      this.userData = user
      console.log(this.userData)
    })
  }
 public onClickSubmit(){
   this.dataSaved=false;
   console.log(this.userFormData.value)
   this.userFormData.reset()
   
 }
}
