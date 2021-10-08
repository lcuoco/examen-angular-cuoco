import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RestaurantDetailComponent} from './restaurants/restaurant-detail/restaurant-detail.component';
import {RestaurantAddComponent} from './restaurants/restaurant-add/restaurant-add.component';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {RestaurantRoutingModule} from './restaurant-routing.module';



@NgModule({
  declarations: [
    RestaurantDetailComponent,
    RestaurantAddComponent,
    RestaurantsComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule
  ]
})
export class RestaurantModule { }
