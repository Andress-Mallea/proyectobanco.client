import { Injectable } from '@angular/core';
import { CreditPlan } from '../models/credit-plan.model';

@Injectable({ providedIn: 'root' })
export class BankService {
  private readonly MAX_CREDIT_AMOUNT = 50000;

  private plans: CreditPlan[] = [
    {
      id: 'p1',
      usuarioSeleccionado: 'Carlos Mendoza',
      monto: 15000,
      plazoMeses: 24,
      interestRate: 12,
      esFija: true,
      penaltyRate: 5,
      graceDays: 3,
      saldoPendiente: 15000,
      createdAt: new Date()
    }
  ];

  public notifications: { message: string, type: 'success' | 'error' }[] = [];

  getPlans() { return this.plans; }

  AddPlan(plan: any) {
    if (plan.monto > this.MAX_CREDIT_AMOUNT) {
      throw new Error('El monto excede el límite permitido');
    }

    const nuevoCredito: CreditPlan = {
      usuarioSeleccionado: plan.usuarioSeleccionado,
      monto: plan.monto,
      plazoMeses: plan.plazoMeses,
      interestRate: plan.interestRate,
      esFija: plan.esFija,
      penaltyRate: plan.penaltyRate,
      graceDays: plan.graceDays,
      saldoPendiente: plan.monto,
      createdAt: new Date(),
      id: Math.random().toString(36)
    };

    this.plans.push(nuevoCredito);
    this.showToast('Crédito creado exitosamente');
  }

  showToast(message: string, type: 'success' | 'error' = 'success') {
    //const TOAST_DURATION_MS = 3000;
    this.notifications.push({ message, type });
    setTimeout(() => {
      this.notifications.shift();
    }, 3000);
  }
}
