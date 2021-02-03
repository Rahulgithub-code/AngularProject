import { Component, OnInit } from '@angular/core';
import {HttpApiService} from '../http-api.service'

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  personData = [];
  constructor( private myService: HttpApiService) { }

  ngOnInit(): void {
    this.myService.getData().subscribe((data)=> {
      this.personData = Array.from(Object.keys(data), k => data[k]);
      console.log(this.personData);
    })
  }

}
