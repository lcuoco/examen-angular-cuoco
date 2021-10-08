import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RestaurantDetailComponent} from './restaurants/restaurant-detail/restaurant-detail.component';
import {RestaurantAddComponent} from './restaurants/restaurant-add/restaurant-add.component';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {RestaurantRoutingModule} from './restaurant-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    RestaurantDetailComponent,
    RestaurantAddComponent,
    RestaurantsComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    // Material modules
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class RestaurantModule { }
