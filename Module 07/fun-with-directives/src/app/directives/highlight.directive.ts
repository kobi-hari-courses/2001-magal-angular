import { Directive, ElementRef, Renderer2, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private wasEventered: boolean = false;

  @Input('appHighlight')
  color: string;

  @Output('triggered')
  triggered = new EventEmitter<void>();

  @HostBinding('style.background-color')
  background = '';

  @HostListener('mouseenter')
  onMouseInside() {
    console.log('Enter');
    if (!this.wasEventered) {
      this.triggered.emit();
      this.wasEventered = true;
    }
    this.background = (this.color) ? this.color : 'yellow';
  }

  @HostListener('mouseleave')
  onMouseOutside() {
    this.background = '';
  }

  constructor(
    private elem: ElementRef, 
    private renderer: Renderer2) { 
    // elem.nativeElement.style.backgroundColor='yellow';
    // this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'pink');
  }

}
