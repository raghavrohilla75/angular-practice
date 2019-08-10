import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamesComponent } from './names/names.component';
import { NameTagComponent } from './name-tag/name-tag.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { OuterComponent } from './outer/outer.component';
import { InnerComponent } from './inner/inner.component';

import { HttpClientModule } from '@angular/common/http' ; 

@NgModule({
  declarations: [
    AppComponent,
    NamesComponent,
    NameTagComponent,
    MainContainerComponent,
    OuterComponent,
    InnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
