import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Equation } from 'src/app/models/equation';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {

  calculations: Equation[];

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    this.calculations = data;
   }

  ngOnInit(): void {
  }

  eraseHistory(i: number): void{
    this.calculations.splice(i, 1);
    localStorage.setItem('calculatorHistory', JSON.stringify(this.calculations));
  }

}
