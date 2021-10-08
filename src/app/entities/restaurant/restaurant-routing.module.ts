import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RestaurantModule} from './restaurant.module';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {RestaurantAddComponent} from './restaurants/restaurant-add/restaurant-add.component';
import {RestaurantDetailComponent} from './restaurants/restaurant-detail/restaurant-detail.component';


const routes: Routes = [
  { path: '', component: RestaurantsComponent },
  { path: 'add', component: RestaurantAddComponent },
  { path: 'detail', component: RestaurantDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
  ]
})
export class RestaurantRoutingModule { }
