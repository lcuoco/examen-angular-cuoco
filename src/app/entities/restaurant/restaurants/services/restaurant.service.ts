import { Injectable } from '@angular/core';
import {IRestaurant} from '../../../../shared/model/restaurant.model';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

export type EntityResponseType = HttpResponse<IRestaurant>;
export type EntityArrayResponseType = HttpResponse<IRestaurant[]>;


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  protected resourceUrl = 'http://localhost:3000/restaurants';

  constructor(protected http: HttpClient ){}

  create(restaurant: IRestaurant): Observable<EntityResponseType> {
    return this.http.post<IRestaurant>(this.resourceUrl, restaurant, { observe: 'response' });
  }

  update(restaurant: IRestaurant): Observable<EntityResponseType> {
    return this.http.put<IRestaurant>(`${this.resourceUrl}/${restaurant.id}`, restaurant, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IRestaurant>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    return this.http.get<IRestaurant[]>(this.resourceUrl, { observe: 'response' });
  }
  //
  // delete(id: number): Observable<HttpResponse<{}>> {
  //   return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  // }

}

