/**
 * Компонент інпуту для калькулятора.
 * Використовує react-currency-input-field для відображення валют з форматуванням.
 */
import {FC, memo} from "react";
import CurrencyInput from "react-currency-input-field";
import * as s from "./CalculatorInput.module.scss";

interface CalculatorInputProps {
  value: string;/** Значення інпуту */
  onChange: (value: string) => void;/** Функція для оновлення значення */
  currencySymbol?: string;/** Символ валюти, який показується перед числом */
}

const CalculatorInput: FC<CalculatorInputProps> = memo(({
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
      onValueChange={(val) => onChange(val || "")}
      className={s.input}
    />
  );
});

export default CalculatorInput;