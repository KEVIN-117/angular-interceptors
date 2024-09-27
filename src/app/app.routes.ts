import { Routes } from '@angular/router';
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {HomeComponent} from "./pages/home/home.component";
import {DetailsComponent} from "./components/characters/details/details.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    children: [
      {
        path: 'characters/:id',
        component: DetailsComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
