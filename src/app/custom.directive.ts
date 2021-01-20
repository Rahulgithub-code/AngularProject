import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = "orange"
   }
   
}
