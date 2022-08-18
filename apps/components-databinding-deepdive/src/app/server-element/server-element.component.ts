/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cdd-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text-Content:', this.header.nativeElement.textContent);
  }

  ngDoCheck(): void {
      console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
      console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentCalled called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log('Text-Content:', this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewCalled called!');
  }

  ngOnDestroy(): void {
      console.log('ngOnDestroy called!');
  }
}
