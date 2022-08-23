import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[directivesDeepDiveBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

}