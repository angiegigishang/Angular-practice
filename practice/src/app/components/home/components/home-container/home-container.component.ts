import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { TopMenu,ImageSlider, ImageSliderComponent, Channel } from 'src/app/components/shared/components';
import { Router } from '@angular/router';
import { HomeService, token } from '../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {scrollableTabBgColor = 'grey';
  constructor(
    private router: Router, 
    private service: HomeService,
    @Inject(token) private baseUrl: string
  ) { }
  topMenus: TopMenu[] = [];

  ngOnInit():void {
    this.topMenus = this.service.getTabs();
    console.log('token2', this.baseUrl)
  }

  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link])
  }

}
