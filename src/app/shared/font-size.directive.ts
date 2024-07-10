import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.cambiarTamaño();
  }

  private cambiarTamaño() {
    this.renderer.setStyle(this.el.nativeElement, 'fontSize', '20px');
  }
}
