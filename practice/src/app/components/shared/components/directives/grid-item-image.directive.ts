import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appGridItemImage]',
})

export class GridItemImageDirective implements OnInit {
  @Input() appGridItemImage = '1rem';
  @Input() fitMode = "cover";

  @HostBinding('style.display') display = 'grid';

  constructor(private elr: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit():void {
    this.setStyle('grid-area', 'image');
    this.setStyle('width', this.appGridItemImage);
    this.setStyle('height', this.appGridItemImage);
    this.setStyle('object-fit', this.fitMode); 
  }

  private setStyle(styleName: string, styleValue: string | number) {
    this.renderer.setStyle(this.elr.nativeElement, styleName, styleValue)
  }

  @HostListener('click', ['$event.target'])
  handleClick(ev:any) {
    console.log(ev);
  }

}