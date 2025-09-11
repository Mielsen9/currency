import * as s from './CurrencySelector.module.scss'
import { FC } from "react";

interface CurrencySelectorProps {
  rate: number;
  onChange: (newRate: number) => void;
  options: { label: string; value: number }[];
}

const CurrencySelector: FC<CurrencySelectorProps> = ({ rate, onChange, options }) => {
  return (
    <select
      className={s.CurrencySelector}
      value={rate}
      onChange={(e) => onChange(Number(e.target.value))}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelector;