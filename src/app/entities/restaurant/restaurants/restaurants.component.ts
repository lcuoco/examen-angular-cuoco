import { Component, OnInit } from '@angular/core';
import {RestaurantService} from './services/restaurant.service';
import {IRestaurant} from '../../../shared/model/restaurant.model';
import {HttpResponse} from '@angular/common/http';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  constructor(protected restaurantService: RestaurantService) { }
  restaurants: IRestaurant[];
  faStar = faStar;

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void
  {
    this.restaurantService.query().subscribe(
      (res: HttpResponse<IRestaurant[]>) => {
        this.restaurants = res.body;
      }
    );
  }

  parseNumber(i: number): any{
    return new Array(i);
  }

  getAvg(restaurant: IRestaurant): number{
    const grades = [];
    restaurant.evaluations.forEach(evaluation => grades.push(evaluation.etoiles));
    const total = grades.reduce((acc, c) => acc + c, 0);
    return total / grades.length;
  }

}
