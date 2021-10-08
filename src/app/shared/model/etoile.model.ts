
export interface IEtoile {
  id?: number;
  nombreEtoile?: number;
}

export class Etoile implements IEtoile {
  constructor(public id?: number, public nombre?: number) {}
}
