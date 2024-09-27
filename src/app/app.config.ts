import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {DragonballService} from "./core/services/dragonball.service";
import {provideHttpClient} from "@angular/common/http";
import {PaginationService} from "./core/services/pagination.service";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), DragonballService, provideHttpClient(), PaginationService]
};
