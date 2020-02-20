import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {ColorComponent} from './color/color.component';
import {NgClassExempleComponent} from './directives/ng-class-exemple/ng-class-exemple.component';


const routes: Routes = [
  {path: '', component: CvComponent},
  {path: 'cv', component: CvComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'color/:couleur', component: ColorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
