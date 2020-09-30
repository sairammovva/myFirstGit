import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { Task2309Component } from './task2309/task2309.component';
import { Task2409headComponent } from './task2409head/task2409head.component';
import { Task2409bodyComponent } from './task2409body/task2409body.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Task2309Component,
    Task2409headComponent,
    Task2409bodyComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  //bootstrap: [HeaderComponent]
})
export class AppModule { }
