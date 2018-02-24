import {Routes} from '@angular/router';

export const ROUTES: Routes = [{
  path: '',
  loadChildren: 'app/home/home.module#HomeModule',
}];
