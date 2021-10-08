import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RestaurantsComponent } from './entities/restaurant/restaurants/restaurants.component';
import { RestaurantDetailComponent } from './entities/restaurant/restaurants/restaurant-detail/restaurant-detail.component';
import { RestaurantAddComponent } from './entities/restaurant/restaurants/restaurant-add/restaurant-add.component';
import { EvaluationAddComponent } from './entities/evaluation/evaluation-add/evaluation-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RestaurantModule} from './entities/restaurant/restaurant.module';
import {EvaluationModule} from './entities/evaluation/evaluation.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    RestaurantModule,
    EvaluationModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
