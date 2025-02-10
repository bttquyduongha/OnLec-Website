import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import routeConfig from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Tăng hiệu suất bằng cách giảm số lượng sự kiện thay đổi
    provideRouter(routeConfig), // Cung cấp định tuyến cho ứng dụng
    provideClientHydration(withEventReplay()), provideAnimationsAsync(), // Hỗ trợ SSR (Server-Side Rendering) nếu cần
  ],
};
