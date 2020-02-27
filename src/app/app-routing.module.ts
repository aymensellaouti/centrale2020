import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {ColorComponent} from './color/color.component';
import {NgClassExempleComponent} from './directives/ng-class-exemple/ng-class-exemple.component';
import {DetailPersonneComponent} from './cv/detail-personne/detail-personne.component';
import {AdminComponent} from './admin/admin.component';
import {FrontComponent} from './front/front.component';


const routes: Routes = [
  {path: '', component: CvComponent},
  {path: 'cv', children: [
      {path: '', component: CvComponent},
      {path: ':id', component: DetailPersonneComponent},
    ]},
  {path: 'cv', component: CvComponent},
  {path: 'cv/:id', component: DetailPersonneComponent},
  {path: 'admin', component: AdminComponent, children: [
      {path: 'todo', component: TodoComponent}
    ]
  },
  {path: 'front', component: FrontComponent, children: [
      {path: 'color/:couleur', component: ColorComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
