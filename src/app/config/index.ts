import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { registerLocaleData } from '@angular/common';
import localeRU from '@angular/common/locales/ru';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { routes } from '../routes';
import { provideMaterialSettings } from '../providers';

registerLocaleData(localeRU, 'ru');

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideEnvironmentNgxMask(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideMaterialSettings(),
  ],
};
