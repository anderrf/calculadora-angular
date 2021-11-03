import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Equation } from 'src/app/models/equation';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  displayContent!: string;
  history!: Equation[];

  constructor(private bottomSheet: MatBottomSheet) {
   }

  ngOnInit(): void {
    this.displayContent = "";
    this.getHistory();
  }

  getHistory(): void{
    let savedHistory: string | null = localStorage.getItem('calculatorHistory');
    if(savedHistory === null){
      this.history = [];
      savedHistory = JSON.stringify(this.history);
      localStorage.setItem('calculatorHistory', savedHistory);
    }
    else{
      let operations = JSON.parse(savedHistory) as Equation[];
      this.history = operations;
    }
  }

  insert(digit: string): void{
    this.displayContent += digit;
  }

  clear(): void{
    this.displayContent = "";
  }

  backspace(): void{
    this.displayContent += '';
    this.displayContent = this.displayContent.slice(0, (this.displayContent.length - 1));
  }

  equals(): void{
    let operation = this.displayContent;
    let result = eval(this.displayContent).toString();
    if(result.includes('.')){
      let resultAux = result.split('.');
      result = resultAux[0] + '.' + resultAux[1].substring(0, 8);
    }
    this.displayContent = result;
    this.displayContent += '';
    const newHistory: Equation = {operation: operation, result: result};
    this.saveHistory(newHistory);
  }

  openHistory(): void{
    this.bottomSheet.open(BottomSheetComponent, {data: this.history});
  }

  saveHistory(newHistory: Equation): void{
    this.history.push(newHistory);
    localStorage.setItem('calculatorHistory', JSON.stringify(this.history));
  }

}
