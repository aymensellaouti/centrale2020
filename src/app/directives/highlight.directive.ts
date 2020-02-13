import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() colorIn = 'yellow';
  @Input() colorOut = 'red';
  @HostBinding('style.backgroundColor') bg = this.colorOut;
  constructor() { }
  @HostListener('mouseenter') in() {
    this.bg = this.colorIn;
  }
  @HostListener('mouseleave') out() {
    this.bg = this.colorOut;
  }
}
