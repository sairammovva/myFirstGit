import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  public n1: number = 0;
  public n2: number = 0;
  public n3: number;
  public operation: string;


  add() {
    this.n3 = this.n1 + this.n2;
    this.operation = 'sum of';
  }
  sub() {
    this.n3 = this.n1 - this.n2;
    this.operation = 'diference between';

  }
  mul() {
    this.n3 = this.n1 * this.n2;
    this.operation = 'product of';
  }
  div() {
    this.n3 = this.n1 / this.n2;
    this.operation = 'quotient of';
  }

  ngOnInit(): void {
  }

}
