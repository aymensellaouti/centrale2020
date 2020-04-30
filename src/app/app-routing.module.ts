import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv/cv.component';
import {TodoComponent} from './components/todo/todo.component';
import {ColorComponent} from './components/color/color.component';
import {NgClassExempleComponent} from './directives/ng-class-exemple/ng-class-exemple.component';
import {DetailPersonneComponent} from './cv/detail-personne/detail-personne.component';
import {TwoWayComponent} from './components/two-way/two-way.component';
import {NF404Component} from './components/nf404/nf404.component';
import {LoginComponent} from './components/login/login.component';
import {AddPersonneComponent} from './cv/add-personne/add-personne.component';
import {AuthGuard} from './guard/auth.guard';


const routes: Routes = [
  {path: '', component: CvComponent},
  {path: 'cv/new', component: AddPersonneComponent, canActivate: [AuthGuard]},
  {path: 'cv', children: [
      {path: '', component: CvComponent},
      {path: ':id', component: DetailPersonneComponent},
    ]},
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
