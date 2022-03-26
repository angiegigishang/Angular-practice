import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent, HomeGrandComponent } from './components';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';
import { HomeService, token } from './services';



@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent
  ],
  providers: [
    HomeService,
    {provide: token, useValue: 'http://local.dev'}
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class HomeModule { }
