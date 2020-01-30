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
    ListComponent
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
