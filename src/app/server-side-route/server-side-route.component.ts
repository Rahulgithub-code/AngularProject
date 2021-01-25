import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-server-side-route',
  templateUrl: './server-side-route.component.html',
  styleUrls: ['./server-side-route.component.scss']
})
export class ServerSideRouteComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit(): void {
  }

  serverRoute(){
    this.route.navigate(['/server-side']);
  }
}
