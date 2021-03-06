import { Component, 
         ElementRef, 
         Input, 
         OnInit, 
         ViewChild,
         QueryList, 
         ViewChildren, 
         AfterViewInit,
         Renderer2,
         OnDestroy} from '@angular/core';


export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() intervalBySeconds = 2;
  selectedIndex = 0;
  intervalId:any;
  @ViewChild('imageSlider', {static: true}) imgSlider: ElementRef;
  @ViewChildren('img') imgs: QueryList<ElementRef>;

  constructor(private rd2: Renderer2) { }

  ngOnInit() {
    console.log('xxxx', this.imgSlider);
    console.log('xxxx2', this.imgs);
  }

  ngAfterViewInit(): void {
    let i = 0;
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(this.imgSlider.nativeElement, 
                           'scrollLeft', 
                           (this.getIndex(++this.selectedIndex) % this.sliders.length) * 
                            this.imgSlider.nativeElement.scrollWidth / 
                            this.sliders.length );
    }, this.intervalBySeconds * 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId)
  }

  getIndex(idx: number): number {
    return idx >= 0 ? idx % this.sliders.length : this.sliders.length - Math.abs(idx)
  }

  handleScroll(event:any) {
    const ratio = ( event.target.scrollLeft * this.sliders.length) / event.target.scrollWidth;
    this.selectedIndex = Math.round(ratio)
  }

}
