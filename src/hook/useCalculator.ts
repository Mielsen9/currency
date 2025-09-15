/**
 * Хук для базового калькулятора.
 * Виконує обчислення результату на основі введеного числа і курсу валюти.
 */
import { useState, useCallback } from "react";
import formatCurrency from "@/shared/utils/formatCurrency";

export const useCalculator = (initialValue = 0) => {
  /** Поточне значення введене користувачем */
  const [value, setValue] = useState<number>(initialValue);

  /** Відформатований результат */
  const [result, setResult] = useState<string>("0.00");

  /**
   * Обробник зміни значення
   * @param val - введене число користувачем
   * @param rate - курс валюти з API (може бути в копійках)
   */
  const handleChange = useCallback((val: number, rate: number) => {
    const normalizedValue = Number(val);

    const formatted = formatCurrency(normalizedValue * rate, {
      isCents: true, // rate у копійках
      fractionDigits: 2,
    });

    setValue(normalizedValue);
    setResult(formatted);
  }, []);

  return { value, result, handleChange };
};