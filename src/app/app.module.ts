import { FocusKeepModule } from './directives/focus-keep/focus-keep.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'
import { MatListModule } from '@angular/material/list'
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component'
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    BottomSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBottomSheetModule,
    MatListModule,
    FocusKeepModule
  ],
  providers: [],
  entryComponents: [
    BottomSheetComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
