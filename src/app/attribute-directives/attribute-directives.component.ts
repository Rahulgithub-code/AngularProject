import { Component, OnInit } from '@angular/core';
interface Cars {
  name: string;
  color: string;
}

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cars: Cars[] = [
    {
      name: "Mg Hector",
      color: "blue"
    },
    {
      "name": "Ford",
      "color": 'olive'
    },
    {
      "name": "Kia",
      "color": 'orange'
    },
    {
      "name": "BMW",
      "color": 'red'
    },
    {
      "name": "Jaguar",
      "color": 'green'
    },
    {
      "name": "Suzuki",
      "color": 'purple'
    }
  ]
  people: any[] = [
    {
      name: "Douglas Pace",
      country: "UK"
    },
    {
      name: "Mclead Mueller",
      country: "USA"
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    }
  ]
  getColor(country){
    switch (country) {
      case 'UK' :
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK' :
        return 'red';
    }
  }
}
