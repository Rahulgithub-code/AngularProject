import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular8';
  workRoute=[
    {
      route: '/home',
      icon: 'home',
      title: 'Home'
    },
    
    {
      route: '/variable',
      icon: 'home',
      title: 'Variable'
    },
    {
      route: '/operator',
      icon: 'home',
      title: 'Operator'
    },
    {
      route: '/switch',
      icon: 'home',
      title: 'Switch-Case'
    },
    {
      route: '/loop',
      icon: 'home',
      title: "Loop's"
    },
    {
      route: '/parameter',
      icon: 'home',
      title: "Parameter's"
    },
    {
      route: '/function',
      icon: 'home',
      title: "Function"
    },
    {
      route: '/objectArray',
      icon: 'home',
      title: 'Object & Array'
    },
    {
      route: '/oops',
      icon: 'home',
      title: 'OOPs & Operation with OOPs'
    },
    {
      route: '/dataBinding',
      icon: 'home',
      title: 'Data Binding'
    },
    {
      route: '/events',
      icon: 'home',
      title: 'Event Binding'
    },
    {
      route: '/ngModel',
      icon: 'home',
      title: 'Two way binding'
    },
    {
      route: '/pipe',
      icon: 'home',
      title: 'Pipe'
    },
    {
      route: '/structuralDirectives',
      icon: 'home',
      title: 'Structural Directives'
    },
    {
      route: '/attributeDirectives',
      icon: 'home',
      title: 'Attribute Directives'
    },
    {
      route: '/custom-directive',
      icon: 'home',
      title: 'Custom Directives'
    },
    {
      route: '/server-side-route',
      icon: 'home',
      title: 'Server-Side-Route'
    },
    {
      route: '/formExample',
      icon: 'home',
      title: 'Template-driven Form'
    },
    {
      route: '/reactive-form',
      icon: 'home',
      title: 'Reactive Form'
    },
    {
      route: '/http',
      icon: 'home',
      title: 'HTTP'
    },{
      route: '/http-crud-operation',
      icon: 'home',
      title: 'HTTP Crud Operation'
    },
    {
      route: '/programs',
      icon: 'home',
      title: "Program's"
    },
    {
      route: '/404',
      icon: 'home',
      title: '404 - Page'
    }
  ]
  events: string[] = [];
  opened: boolean;
}
