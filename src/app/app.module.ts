import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AdminComponent } from './admin/admin.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
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
import { CustomDirective } from './custom.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { ProgramsComponent } from './programs/programs.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MypipePipe } from './mypipe.pipe';
import { ServerSideRouteComponent } from './server-side-route/server-side-route.component';
import { ServerRouteComponent } from './server-route/server-route.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AdminComponent,
    HomeComponent,
    OperatorPageComponent,
    SwitchPageComponent,
    VarPageComponent,
    LoopPageComponent,
    ParameterPageComponent,
    FunctionPageComponent,
    ErrorPageComponent,
    DataBindingComponent,
    PipeComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    EventsComponent,
    NgModelComponent,
    FormExampleComponent,
    CustomDirective,
    CustomDirectiveComponent,
    ProgramsComponent,
    MypipePipe,
    ServerSideRouteComponent,
    ServerRouteComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("I'm from App Module class")
  }
 }
