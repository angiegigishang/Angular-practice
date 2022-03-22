import { Component, ViewChild } from '@angular/core';
import { TopMenu, ImageSlider, ImageSliderComponent } from './components';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ImageSliderComponent) imgSlider: ImageSliderComponent;
  scrollableTabBgColor = 'grey';
  topMenus: TopMenu[] = [
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '运动',
      link: ''
    },
    {
      title: '手机',
      link: ''
    },
    {
      title: '家纺',
      link: ''
    },
    {
      title: '食品',
      link: ''
    },
    {
      title: '电器',
      link: ''
    },
    {
      title: '鞋包',
      link: ''
    },
    {
      title: '汽车',
      link: ''
    },
    {
      title: '水果',
      link: ''
    },
    {
      title: '电脑',
      link: ''
    },
    {
      title: '内衣',
      link: ''
    },
    {
      title: '家装',
      link: ''
    },
    {
      title: '母婴',
      link: ''
    },
    {
      title: '美妆',
      link: ''
    },
    {
      title: '家具',
      link: ''
    }
  ];

  imageSliders: ImageSlider[] = [
    {
      imgUrl:
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e66e9d1e25726cc0dcb6b743e5b388b.png?thumb=1&w=2452&h=920&f=webp&q=90',
      link: '',
      caption: ''
    },
    {
      imgUrl:
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b96c73fd25ec69532a0384c56353458.jpg?w=2452&h=920',
      link: '',
      caption: ''
    },
    {
      imgUrl:
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1995da1db2423f7876b9b94de748e16f.jpg?thumb=1&w=2452&h=920&f=webp&q=90',
      link: '',
      caption: ''
    },
    {
      imgUrl:
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b96c73fd25ec69532a0384c56353458.jpg?w=2452&h=920',
      link: '',
      caption: ''
    }
  ];

  username = '';

  constructor() {}

  handleTabSelected(tabMenu: TopMenu) {
    // const colors = ['red', 'blue', 'black'];
    // const idx = Math.floor(Math.random() * 3);
    // this.scrollableTabBgColor = colors[idx];
  }

  ngAfterViewInit(): void {
  }
}
