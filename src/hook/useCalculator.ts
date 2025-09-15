/**
 * Хук для базового калькулятора.
 * Виконує обчислення результату на основі введеного числа і курсу валюти.
 */
import { useState, useCallback } from "react";
import formatCurrency from "@/shared/utils/formatCurrency";
import {Calculator} from "@/features/calculator/Calculator";

export const useCalculator = () => {

  /** Відформатований результат */
  const [result, setResult] = useState<string>("0.00");

  /**
   * Обробник зміни значення
   * @param val - введене число користувачем
   * @param rate - курс валюти з API (може бути в копійках)
   */
  const handleChange = useCallback((value: string, rate: number) => {
    const calc = new Calculator();

    const formatted = formatCurrency(calc.calculate(value, rate), {
      isCents: true, // rate у копійках
      fractionDigits: 2,
    });

    setResult(formatted);
  }, []);

  return {result, handleChange };
};