export interface CreditPlan {
  id?: string;
  usuarioSeleccionado: string;
  monto: number;
  plazoMeses: number;
  interestRate: number;
  esFija: boolean;
  penaltyRate: number;
  graceDays: number;
  saldoPendiente?: number;
  createdAt: Date;
}
