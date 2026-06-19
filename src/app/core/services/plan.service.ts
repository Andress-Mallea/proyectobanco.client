import { Injectable } from '@angular/core';
import { CreditPlan } from '../models/credit-plan.model';
import { InterestStrategy } from '../strategies/interest.strategy';
@Injectable({ providedIn: 'root' })
export class PlanService {
  // El servicio no sabe cómo se calcula el interés, solo delega al objeto strategy
  calculateFinalAmount(monto: number, tasa: number, strategy: InterestStrategy): number {
    if (monto < 0) throw new Error('Monto negativo');
    return strategy.calculate(monto, tasa);
  }
  calculatePenalty(saldo: number, penalidad: number, atraso: number, gracia: number): number {
  return 0;
  }
}
