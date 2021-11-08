import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocusKeep]'
})
export class FocusKeepDirective implements AfterViewInit{

  public firstFocusable!: HTMLElement;
  public laststFocusable!: HTMLElement;

  constructor(private elementRef: ElementRef<any>) { }

  public ngAfterViewInit(): void {
    const focusables = this.elementRef.nativeElement.querySelectorAll('[tabindex="1"]') as HTMLElement[];
    this.firstFocusable = focusables[0];
    this.laststFocusable = focusables[focusables.length - 1];
    this.firstFocusable.focus();
  }

  @HostListener('keydown', ['$event'])
  public manageTab(event: KeyboardEvent): void{
    if(event.key !== 'Tab'){
      return;
    }
    if(event.shiftKey && document.activeElement === this.firstFocusable){
      this.laststFocusable.focus();
      event.preventDefault();
    }
    else if(document.activeElement === this.laststFocusable){
      this.firstFocusable.focus();
      event.preventDefault();
    }
  }

}
