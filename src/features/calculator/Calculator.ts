/**
 * Клас бізнес-логіки калькулятора.
 * Відповідає тільки за обчислення.
 */
export class Calculator {
  /**
   * Обчислює результат
   * @param value - введене користувачем число
   * @param rate - курс валюти (у копійках)
   * @returns число з 2 знаками після коми
   * @example
   * const calc = new Calculator();
   * calc.calculate(100, 3750) // 3750.00
   */
  public calculate(value: number | string, rate: number): number {
    const normalizedValue = Number(value);
    return (normalizedValue * rate);
  }
}