/**
 * Компонент інпуту для калькулятора.
 * Використовує react-currency-input-field для відображення валют з форматуванням.
 */
import { FC } from "react";
import CurrencyInput from "react-currency-input-field";
import * as s from "./CalculatorInput.module.scss";

interface CalculatorInputProps {
  /** Значення інпуту */
  value: number;
  /** Функція для оновлення значення */
  onChange: (value: number) => void;
  /** Символ валюти, який показується перед числом */
  currencySymbol?: string;
}

const CalculatorInput: FC<CalculatorInputProps> = ({
                                                     value,
                                                     onChange,
                                                     currencySymbol = "₴",
                                                   }) => {
  return (
    <CurrencyInput
      value={value}
      decimalsLimit={2}
      decimalSeparator="."
      groupSeparator=" "
      placeholder="0.00"
      prefix={currencySymbol + " "}
      onValueChange={(val: any) => onChange(Number(val))}
      className={s.input}
    />
  );
};

export default CalculatorInput;