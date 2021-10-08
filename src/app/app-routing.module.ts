import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RestaurantModule} from './entities/restaurant/restaurant.module';

const routes: Routes = [
  { path: '', loadChildren: () => RestaurantModule  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
