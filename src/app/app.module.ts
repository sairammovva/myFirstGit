import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { Empcomp1Component } from './empcomp1/empcomp1.component';
import { Empcomp2Component } from './empcomp2/empcomp2.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ChildComponent } from './child/child.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    Empcomp1Component,
    Empcomp2Component,
    Sibling1Component,
    Sibling2Component,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
