import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {RestaurantService} from '../services/restaurant.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {IRestaurant, Restaurant} from '../../../../shared/model/restaurant.model';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.component.html',
  styleUrls: ['./restaurant-add.component.scss']
})
export class RestaurantAddComponent implements OnInit {

  isSaving = false;

  restaurantForm = this.fb.group({
    id: [],
    nom: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
    adresse: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
  });

  constructor(protected restaurantService: RestaurantService, protected activatedRoute: ActivatedRoute, protected fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ restaurant }) => {
      this.restaurantService.find(restaurant).subscribe((res: HttpResponse<IRestaurant> ) =>
      {
        this.updateForm(res.body);
      });
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    const restaurant = this.createFromForm();
    console.log(restaurant.id);
    if (restaurant.id !== null) {
      this.subscribeToSaveResponse(this.restaurantService.update(restaurant));
    } else {
      this.subscribeToSaveResponse(this.restaurantService.create(restaurant));
    }
  }

  // @ts-ignore
  protected subscribeToSaveResponse(result: Observable<HttpResponse<ILabel>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(restaurant: IRestaurant): void {
    this.restaurantForm.patchValue({
      id: restaurant.id,
      nom: restaurant.nom,
      adresse: restaurant.adresse
    });
  }

  protected createFromForm(): IRestaurant {
    return {
      ...new Restaurant(),
      // tslint:disable-next-line:no-non-null-assertion
      id: this.restaurantForm.get(['id']).value,
      nom: this.restaurantForm.get(['nom']).value,
      adresse: this.restaurantForm.get(['adresse']).value,
      evaluations: []

    };
  }
}
