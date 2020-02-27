import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {ColorComponent} from './color/color.component';
import {NgClassExempleComponent} from './directives/ng-class-exemple/ng-class-exemple.component';
import {DetailPersonneComponent} from './cv/detail-personne/detail-personne.component';
import {TwoWayComponent} from './two-way/two-way.component';
import {NF404Component} from './nf404/nf404.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: '', component: CvComponent},
  {path: 'cv', children: [
      {path: '', component: CvComponent},
      {path: ':id', component: DetailPersonneComponent},
    ]},
  {path: 'cv', component: CvComponent},
  {path: 'cv/:id', component: DetailPersonneComponent},
  {path: 'login', component: LoginComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'color/:couleur', component: ColorComponent},
  {path: '**', component: NF404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
