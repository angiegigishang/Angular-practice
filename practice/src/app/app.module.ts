import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './components/shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './components/home/home.module';

import localeZh from '@angular/common/locales/zh-Hans';
import { registerLocaleData } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'zh-Hans' }],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(localeZh, 'zh');
  }
}
