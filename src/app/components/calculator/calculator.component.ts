import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  displayContent: string;

  constructor() {
    this.displayContent = "";
   }

  ngOnInit(): void {
  }

  insert(digit: string): void{
    this.displayContent += digit;
  }

  clear(): void{
    this.displayContent = "";
  }

}
