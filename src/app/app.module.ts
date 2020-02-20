import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second.component';
import { ColorComponent } from './color/color.component';
import {FormsModule} from '@angular/forms';
import { TwoWayComponent } from './two-way/two-way.component';
import { CardComponent } from './card/card.component';
import { FilsComponent } from './fils/fils.component';
import { PereComponent } from './pere/pere.component';
import { ListComponent } from './cv/list/list.component';
import { CvComponent } from './cv/cv/cv.component';
import { ItemComponent } from './cv/item/item.component';
import { DetailComponent } from './cv/detail/detail.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { NgClassExempleComponent } from './directives/ng-class-exemple/ng-class-exemple.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { TodoComponent } from './todo/todo.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';

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
    EmbaucheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
