//21/09

/*
import { Component} from '@angular/core';
import {CALC} from './calc';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  name = 'sairam';
  company = 'cognizant';
  object1 = {a:1, b:2};
  object2 = {c:3, d:4};
}

*/

//23/09

import { Component, OnInit} from '@angular/core';
//import {CALC} from './calc';
import {add, sub, mul} from './calc';
import {CalcService} from './calc.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*template: `
    Hello Cognizant. i am a component
    {{name}} {{company}} {{object1}}
  `,*/
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  /*name = 'sairam';
  company = 'cognizant';
  object1 = {a: 1, b: 2};
  object2 = {c: 3, d: 4};
  */

  //constructor(private name : string, private company : string){}
  //constructor(private calc: CalcService){}
  constructor(public calc: CalcService){}

  arr = [1,2,3,4,5,6,7,8,9,10]
  data;
  ngOnInit(){
        //console.log(CALC);
    //console.log(add(), sub(), mul());
    console.log(this.calc);
    this.data = {add, sub, mul}
  }
}
