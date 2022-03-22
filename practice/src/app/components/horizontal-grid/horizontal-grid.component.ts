import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  private _username = '';

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


}
