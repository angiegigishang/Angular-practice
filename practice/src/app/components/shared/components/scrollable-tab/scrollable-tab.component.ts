import { Component, 
         OnInit, 
         Input, 
         Output, 
         EventEmitter, 
       } from '@angular/core';


export interface TopMenu {
  id: number;
  title: string;
  readonly link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {

  selectedIndex = -1;
  title = 'angular-practice';
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = 'blue';
  @Input() titleActivColor = 'yellow';
  @Input() titleColor = 'blue';
  @Input() indicatorColor = 'pink';
  @Output() tabSelected = new EventEmitter()

  constructor() { 
    console.log('constructor');
  }

  ngOnInit(): void {
      
  }

  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex])
  }

}
