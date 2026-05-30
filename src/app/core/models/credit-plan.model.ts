export interface CreditPlan {
  id?: string;
  usuarioSeleccionado: string; // Cambio de 'name' a este
  monto: number;               // Antes era minAmount/maxAmount
  plazoMeses: number;          // Atributo nuevo
  interestRate: number;
  esFija: boolean;             // Antes era isVariableRate
  penaltyRate: number;
  graceDays: number;
  saldoPendiente?: number;     // Atributo nuevo para el seguimiento
  createdAt: Date;
}
