import { Injectable } from '@angular/core';
import { CreditPlan } from '../models/credit-plan.model';
import { SystemUser } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class BankService {
  private plans: CreditPlan[] = [];
  private users: SystemUser[] = [];
  public notifications: { message: string, type: 'success' | 'error' }[] = [];
  getPlans() { return this.plans; }
  AddPlan(plan: any) {
  const nuevoCredito: CreditPlan = {
      usuarioSeleccionado: plan.usuarioSeleccionado,
      monto: plan.monto,
      plazoMeses: plan.plazoMeses,
      interestRate: plan.interestRate,
      esFija: plan.esFija,
      penaltyRate: plan.penaltyRate,
      graceDays: plan.graceDays,
      saldoPendiente: plan.monto, // El saldo inicial es el monto total
      createdAt: new Date(),
      id: Math.random().toString(36)
    };
  this.plans.push(nuevoCredito);
  this.showToast('Crédito creado exitosamente');
  }
  showToast(message: string, type: 'success' | 'error' = 'success') {
  this.notifications.push({ message, type });
  // El mensaje desaparece solo después de 3 segundos
  setTimeout(() => {
    this.notifications.shift();
  }, 3000);
}
  getUsers() { return this.users; }

  addUser(user: SystemUser): string | null {
    // Validar duplicados por Email o CI
    const exists = this.users.find(u => u.email === user.email || u.ci === user.ci);

    if (exists) {
      return (exists.email === user.email)
        ? 'Error: Ya existe un usuario con este correo.'
        : 'Error: Ya existe un usuario con esta Cédula de Identidad.';
    }

    this.users.push({ ...user, id: Math.random().toString(36) });
    this.showToast('Usuario registrado exitosamente');
    return null; // Todo OK
  }
}
