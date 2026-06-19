import { BankService } from './bank.service';

describe('BankService', () => {
  it('debería lanzar error si el monto del plan supera el límite máximo de 50000', () => {
    const service = new BankService();
    const planInvalido = { monto: 60000, usuarioSeleccionado: 'Juan', plazoMeses: 12 };

    expect(() => service.AddPlan(planInvalido)).toThrowError('El monto excede el límite permitido');
  });
});
