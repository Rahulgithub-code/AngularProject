import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  time = new Date();

  //Json
  public emp = [
    {
      id: 1,
      name: 'Rahul'
    },
    {
      id: 2,
      name: 'Vipul'
    },
    {
      id: 3,
      name: 'Sonali'
    },
    {
      id: 4,
      name: 'Nitu'
    },
    {
      id: 5,
      name: 'Namita'
    }
  ]

  // custom pipe
  employee:any = [
    { code: '001', name: 'Rahul', gender: 'male'},
    { code: '002', name: 'Vipul', gender: 'male'},
    { code: '003', name: 'Sonali', gender: 'female'},
    { code: '004', name: 'Nitu', gender: 'female'},
    { code: '005', name: 'Namita', gender: 'female'}
  ]
}

