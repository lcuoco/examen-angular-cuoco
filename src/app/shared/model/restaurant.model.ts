import {IEvaluation} from './evaluation.model';

export interface IRestaurant {
  id?: number;
  nom?: string;
  adresse?: string;
  evaluations?: IEvaluation[];
}

export class Restaurant implements IRestaurant {
  constructor(public id?: number, public nom?: string, public adresse?: string, public evaluations?: IEvaluation[]) {}
}
