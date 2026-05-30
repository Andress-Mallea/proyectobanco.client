import { PlanService } from './plan.service';
import { SimpleInterestStrategy } from '../strategies/simple-interest.strategy';

describe('PlanService - Strategy Pattern', () => {
  let service: PlanService;

  beforeEach(() => {
    service = new PlanService();
  });

  it('debería calcular el interés simple correctamente usando la estrategia', () => {
    // Arrange
    const strategy = new SimpleInterestStrategy();
    const monto = 1000;
    const tasa = 10; // 10%

    // Act
    const resultado = service.calculateFinalAmount(monto, tasa, strategy);

    // Assert
    expect(resultado).toBe(1100);
  });

  it('debería lanzar error si el monto es negativo antes de delegar', () => {
    const strategy = new SimpleInterestStrategy();
    expect(() => service.calculateFinalAmount(-100, 10, strategy)).toThrow('Monto negativo');
  });
});
