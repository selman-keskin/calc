import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public num1:number;
  public num2:number;
  public result:number;
  public resultText:string;

  sum() {
    this.result = this.num1 + this.num2;
    this.resultText = 'The Summation of';
  }

  sub() {
    this.result = this.num1 - this.num2;
    this.resultText = 'The Subtraction of';
  }

  multi() {
    this.result = this.num1 * this.num2;
    this.resultText = 'The Multiplication of';
  }

  div() {
    this.result = (this.num1) / (this.num2);
    this.resultText = 'The Division of';
  }

  and() {
    this.result = this.num1 & this.num2;
    this.resultText = 'The Bitwise AND of';
  }

  or() {
    this.result = this.num1 | this.num2;
    this.resultText = 'The Bitwise OR of';
  }

  xor() {
    this.result = this.num1 ^ this.num2;
    this.resultText = 'The Bitwise XOR of';
  }
}
