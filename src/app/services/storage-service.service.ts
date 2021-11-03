import { Equation } from 'src/app/models/equation';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly historyKey: string = 'calculatorHistory';

  constructor() { }

  setHistory(history: Equation[]): void{
    localStorage.setItem(this.historyKey, JSON.stringify(history));
  }

  getHistory(): Equation[]{
    let newHistory: Equation[] = [];
    const retrievedHistory: string | null = localStorage.getItem(this.historyKey);
    if(retrievedHistory !== null){
      newHistory = JSON.parse(retrievedHistory) as Equation[];
    }
    else{
      this.setHistory(newHistory);
    }
    return newHistory;
  }
}
