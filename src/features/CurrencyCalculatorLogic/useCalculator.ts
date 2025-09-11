import { useState, useCallback } from "react";

export const useCalculator = (initialValue = 0) => {
  const [value, setValue] = useState<number>(initialValue);
  const [result, setResult] = useState<number>(0);

  const calculate = useCallback((val: number, rate: number) => {
    // Формула залежить від курсу валюти
    const newResult = val * rate;
    setResult(newResult);
  }, []);

  const handleChange = (val: number, rate: number) => {
    setValue(val);
    calculate(val, rate);
  };

  return { value, result, handleChange };
};