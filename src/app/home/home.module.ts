import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {CoreModule} from '../core/core.module';

export const ROUTES: Routes = [{
  path: '',
  component: HomeComponent
}];

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    RouterModule.forChild(ROUTES),
    LeafletModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
