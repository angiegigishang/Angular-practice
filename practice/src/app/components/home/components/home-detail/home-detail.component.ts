import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageSlider, Channel, ImageSliderComponent } from 'src/app/components/shared/components';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: HomeService) { }
  selectedTabLink:any;
  imageSliders: ImageSlider[] = [];
  channels: Channel[] = [];

  ngOnInit() {

    this.imageSliders = this.service.getBanners();
    this.channels = this.service.getChannels();

    this.route.paramMap.subscribe(params => {
      console.log('params', params);
      this.selectedTabLink = this.route.snapshot.paramMap.get('tabLink');
      console.log('selected', this.selectedTabLink);
    })
    
    
    this.route.queryParamMap.subscribe(params => {
      console.log('search', params);
    })
  }

  ngAfterViewInit() {
    
  }

}
