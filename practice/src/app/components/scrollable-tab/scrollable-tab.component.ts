import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';


export interface TopMenu {
  title: string;
  readonly link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit, 
                                               OnChanges, 
                                               AfterContentInit,
                                               AfterViewInit,
                                               AfterViewChecked,
                                               OnDestroy,
                                               AfterContentChecked {

  selectedIndex = -1;
  title = 'angular-practice';
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = 'white';
  @Input() titleActivColor = 'yellow';
  @Input() titleColor = 'blue';
  @Input() indicatorColor = 'pink';
  @Output() tabSelected = new EventEmitter()

  constructor() { 
    console.log('constructor');
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked():void {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngafterviewinit')
  }

  ngAfterViewChecked(): void {
    console.log('ngafterviewchecked')
  }

  ngOnDestroy(): void {
    console.log('destroy')
  }

  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex])
  }

}
