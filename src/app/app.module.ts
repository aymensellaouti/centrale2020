import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './second.component';
import { ColorComponent } from './components/color/color.component';
import {FormsModule} from '@angular/forms';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { CardComponent } from './components/card/card.component';
import { FilsComponent } from './components/fils/fils.component';
import { PereComponent } from './components/pere/pere.component';
import { ListComponent } from './cv/list/list.component';
import { CvComponent } from './cv/cv/cv.component';
import { ItemComponent } from './cv/item/item.component';
import { DetailComponent } from './cv/detail/detail.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { NgClassExempleComponent } from './directives/ng-class-exemple/ng-class-exemple.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { TodoComponent } from './components/todo/todo.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterSimulatorComponent } from './components/router-simulator/router-simulator.component';
import { DetailPersonneComponent } from './cv/detail-personne/detail-personne.component';
import { FrontComponent } from './components/front/front.component';
import { AdminComponent } from './components/admin/admin.component';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './components/login/login.component';
import { ObservableComponent } from './components/observable/observable.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpComponent } from './components/http/http.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import {LoginInterceptorProvider} from './interceptors/loginInterceptor';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoWayComponent,
    CardComponent,
    FilsComponent,
    PereComponent,
    ListComponent,
    CvComponent,
    ItemComponent,
    DetailComponent,
    NgstyleComponent,
    MiniWordComponent,
    NgClassExempleComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    DetailPersonneComponent,
    FrontComponent,
    AdminComponent,
    NF404Component,
    LoginComponent,
    ObservableComponent,
    HttpComponent,
    AddPersonneComponent,
    TaskManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
