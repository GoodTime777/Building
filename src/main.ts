import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { register as registerSwiperElements } from 'swiper/element/bundle';
//import { NgxMaskConfig, provideEnvironmentNgxMask } from 'ngx-mask'




registerSwiperElements();//!
bootstrapApplication(AppComponent,appConfig)
  .catch((err) => console.error(err));