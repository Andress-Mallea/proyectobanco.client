import { Injectable } from '@angular/core';
import { CreditPlan } from '../models/credit-plan.model';

@Injectable({ providedIn: 'root' })
export class PlanService {
  private plans: CreditPlan[] = [];

  getPlans() { return this.plans; }

  addPlan(plan: CreditPlan) {
    // HU-02: Se guarda con la tasa actual, no afecta a contratos viejos 
    // (lógica que se aplicaría al crear un contrato real)
    this.plans.push({ ...plan, id: Math.random().toString(36), createdAt: new Date() });
  }
}