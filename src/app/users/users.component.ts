import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  public dataObject= {
    Name: 'Rahul Kumar',
    Age: 23,
    Address: 'Ranchi'
  }
  public dataArray = [
    {
      Name: 'Rahul Kumar',
      Age: 23,
      Address: 'Ranchi'
    }
  ]
public SendBtn:boolean=false
  SendItem(item:NgForm){
    console.log(item.value)
    this.dataArray.push({Name: item.value.Name, Age: item.value.Age, Address: item.value.Address})
  }
public updateBtn:boolean=true;
public cancelBtn:boolean=false
  ediit(index){
    this.updateBtn=false;
    this.SendBtn=true;
    this.cancelBtn=true
    this.newData['Name']=this.dataArray[index].Name
    this.newData['Age']=this.dataArray[index].Age
    this.newData['Address']=this.dataArray[index].Address
    this.index=index
  }
  public index;
  newData={Name: null, Age: null, Address: null}
  updateSave(){
    console.log(this.index)
    this.dataArray.splice(this.index,1,{Name:this.newData.Name, Age:this.newData.Age, Address: this.newData.Address})
  }
  cancelBtnFuct(){
    this.updateBtn=true;
    this.SendBtn=false;
    this.cancelBtn=false
    this.newData={Name: null, Age: null, Address: null}
  }
  delFunct(index){
    this.dataArray.splice(index,1)

  }


}
