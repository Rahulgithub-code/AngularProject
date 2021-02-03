import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { OperatorPageComponent } from './operator-page/operator-page.component';
import { SwitchPageComponent } from './switch-page/switch-page.component';
import { VarPageComponent } from './var-page/var-page.component';
import { LoopPageComponent } from './loop-page/loop-page.component';
import { ParameterPageComponent } from './parameter-page/parameter-page.component';
import { FunctionPageComponent } from './function-page/function-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipeComponent } from './pipe/pipe.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { EventsComponent } from './events/events.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { ProgramsComponent } from './programs/programs.component';
import { ServerSideRouteComponent } from './server-side-route/server-side-route.component';
import { ServerRouteComponent } from './server-route/server-route.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpComponent } from './http/http.component';
import { HttpCrudComponent } from './http-crud/http-crud.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'objectArray', component: UsersComponent},
  { path: 'home', component: HomeComponent},
  { path: 'oops', component: AdminComponent},
  { path: 'operator', component: OperatorPageComponent},
  { path: 'switch', component: SwitchPageComponent},
  { path: 'variable', component: VarPageComponent},
  { path: 'loop', component: LoopPageComponent},
  { path: 'parameter', component: ParameterPageComponent},
  { path: 'function', component: FunctionPageComponent},
  { path: 'dataBinding', component: DataBindingComponent},
  { path: 'pipe', component: PipeComponent},
  { path: 'structuralDirectives', component: StructuralDirectivesComponent},
  { path: 'attributeDirectives', component: AttributeDirectivesComponent},
  { path: 'events', component: EventsComponent},
  { path: 'ngModel', component: NgModelComponent},
  { path: 'formExample', component: FormExampleComponent},
  { path: 'custom-directive', component: CustomDirectiveComponent},
  { path: 'programs', component: ProgramsComponent},
  { path: 'server-side-route', component: ServerSideRouteComponent},
  { path: 'server-side', component: ServerRouteComponent},
  { path: 'reactive-form', component: ReactiveFormComponent},
  { path: 'http', component: HttpComponent},
  { path: 'http-crud-operation', component: HttpCrudComponent},

  
  { path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
