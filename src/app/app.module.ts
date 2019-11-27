import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './operators/creating/create/create.component';
import { HomeComponent } from './home/home.component';

import {MatButtonModule} from '@angular/material/button';
import { OperatorShellComponent } from './operators/operator-shell.component';
import { DeferComponent } from './operators/creating/defer/defer.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HomeComponent,
    OperatorShellComponent,
    DeferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
