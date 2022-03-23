import { Component, Input, OnInit } from '@angular/core';
import { Emoji, Confirmable } from '../../decorators';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  private _username = 'aaa';
  @Emoji() result = 'hello';

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public get username(): string {
    return this._username;
  }

  public set username(value: string) {
    this._username = value
  }

  @Confirmable('are you sure?')
  handleClick() {
    console.log('click')
  }

}
