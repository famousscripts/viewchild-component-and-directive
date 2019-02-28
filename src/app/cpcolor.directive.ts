import { Directive, ElementRef, AfterViewInit  } from '@angular/core';

@Directive({
  selector: '[appCpcolor]'
})
export class CpcolorDirective implements AfterViewInit {

  constructor(private eleref: ElementRef) { }

  ngAfterViewInit() {
      this.eleref.nativeElement.style.color = 'red';
  }

  changeva(changeColor: string) {
    this.eleref.nativeElement.style.color = changeColor;
  }
}  
