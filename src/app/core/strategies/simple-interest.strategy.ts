import { InterestStrategy } from './interest.strategy';

export class SimpleInterestStrategy implements InterestStrategy {
  calculate(monto: number, tasa: number): number {
    return monto * (1 + (tasa / 100));
  }
}
