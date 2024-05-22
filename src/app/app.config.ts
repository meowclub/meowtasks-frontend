import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideIcons } from '@ng-icons/core'
import { matClose, matCheck, matCrisisAlert, matMenu, matHome, matLogin, matFiberNew } from '@ng-icons/material-icons/baseline'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideHttpClient(withFetch()), 
    provideIcons({ 
      matClose, 
      matCheck, 
      matCrisisAlert, 
      matMenu,
      matHome,
      matLogin,
      matFiberNew,
    })]
};
