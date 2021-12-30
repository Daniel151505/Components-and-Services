import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
    this.elementRef.nativeElement.style.color = 'white';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = '';
    this.elementRef.nativeElement.style.color = '';
  }

  constructor(
    private elementRef: ElementRef
  ) {
    // this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

}
