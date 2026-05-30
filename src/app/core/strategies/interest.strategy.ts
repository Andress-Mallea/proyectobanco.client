export interface InterestStrategy {
  calculate(monto: number, tasa: number): number;
}
