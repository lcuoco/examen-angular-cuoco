import { Component, OnInit } from '@angular/core';
import {IRestaurant, Restaurant} from '../../../../shared/model/restaurant.model';
import {HttpResponse} from '@angular/common/http';
import {RestaurantService} from '../services/restaurant.service';
import {ActivatedRoute} from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {Evaluation, IEvaluation} from '../../../../shared/model/evaluation.model';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {
  evaluation: IEvaluation;
  restaurant: Restaurant;
  restaurantId: any;
  faStar = faStar;

  evalForm = this.fb.group({
    evaluateur: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
    commentaire: [null, [Validators.required, Validators.maxLength(255)]],
    etoiles: []
  });
  constructor(protected restaurantService: RestaurantService, private route: ActivatedRoute, protected fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getRoutePramAndLoad();
  }

  loadAll(): void
  {
    this.restaurantService.find(this.restaurantId).subscribe(
      (res: HttpResponse<IRestaurant>) => {
        this.restaurant = res.body;
      }
    );
  }

  getRoutePramAndLoad(): void
  {
    this.route.params.subscribe(params => {
      this.restaurantId = params.id;
      this.loadAll();
    });
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



  save(): void {
    const evaluation = this.createFromForm();
    this.restaurant.evaluations.push(evaluation);
    this.subscribeToSaveResponse(this.restaurantService.update(this.restaurant));
  }

  // @ts-ignore
  protected subscribeToSaveResponse(result: Observable<HttpResponse<ILabel>>): void {
    result.pipe().subscribe(
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

  protected updateForm(evaluation: IEvaluation): void {
    this.evalForm.patchValue({
      evaluateur: evaluation.evaluateur,
      commentaire: evaluation.commentaire,
      etoiles: evaluation.etoiles
    });
  }

  protected createFromForm(): IEvaluation {
    return {
      ...new Evaluation(),
      // tslint:disable-next-line:no-non-null-assertion
      evaluateur: this.evalForm.get(['evaluateur']).value,
      commentaire: this.evalForm.get(['commentaire']).value,
      etoiles: this.evalForm.get(['etoiles']).value,

    };
  }

  previousState(): void {
    window.history.back();
  }
}
