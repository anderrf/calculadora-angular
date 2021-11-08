import { StorageService } from './../../services/storage-service.service';
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

  public displayContent!: string;
  public history!: Equation[];

  constructor(
    private bottomSheet: MatBottomSheet,
    private storageService: StorageService
  ) { }

  public ngOnInit(): void {
    this.displayContent = "";
    this.getHistory();
  }

  public getHistory(): void{
    this.history = this.storageService.getHistory();
  }

  public insert(digit: string): void{
    this.displayContent += digit;
  }

  public clear(): void{
    this.displayContent = "";
  }

  public backspace(): void{
    this.displayContent += '';
    this.displayContent = this.displayContent.slice(0, (this.displayContent.length - 1));
  }

  public equals(): void{
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

  public openHistory(): void{
    this.bottomSheet.open(BottomSheetComponent, {data: this.history});
  }

  public saveHistory(newHistory: Equation): void{
    this.history.push(newHistory);
    this.storageService.setHistory(this.history);
  }

}
