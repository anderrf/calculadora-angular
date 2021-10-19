import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  displayContent: string;
  history: string[];

  constructor() {
    this.displayContent = "";
    this.history = [];
   }

  ngOnInit(): void {
  }

  insert(digit: string): void{
    this.displayContent += digit;
  }

  clear(): void{
    this.displayContent = "";
  }

  backspace(): void{
    this.displayContent = this.displayContent + '';
    this.displayContent = this.displayContent.slice(0, (this.displayContent.length - 1));
  }

  equals(): void{
    let operation = this.displayContent;
    this.displayContent = eval(this.displayContent);
    this.history.push(operation + " = " + this.displayContent);
    console.log(this.history);
  }

}
