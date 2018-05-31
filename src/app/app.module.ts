import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InsecurityModule } from './components/insecurity/insecurity.module';
import { TypesInsecurityModule } from './components/types-insecurity/types-insecurity.module';
import { StateGraphModule } from './components/state-graph/state-graph.module';
import { RouterModule } from '@angular/router';
import { Routes } from './app.routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    InsecurityModule,
    TypesInsecurityModule,
    StateGraphModule,
    RouterModule.forRoot(Routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
