import {IEtoile} from './etoile.model';

export interface IEvaluation {
  id?: number;
  evaluateur?: string;
  commentaire?: string;
  etoiles?: number;
}

export class Evaluation implements IEvaluation {
  constructor(public id?: number, public evaluateur?: string, public commentaire?: string, public etoiles?: number) {}
}
