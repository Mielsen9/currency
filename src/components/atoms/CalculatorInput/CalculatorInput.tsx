import * as s from './CalculatorInput.module.scss'
import {ChangeEvent, useState} from "react";

// Type
interface CalculatorInputProps {
  value: number;
  onChange: (value: number) => void;
}

// CalculatorInput
const CalculatorInput: React.FC<CalculatorInputProps> = (props) => {
  const {value, onChange} = props

  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    onChange(newValue);
  };
  return (
    <input
      className={s.CalculatorInput}
      type="number"
      value={isFocused && value === 0 ? "" : value}
      onChange={handleChange}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  )
}

export default CalculatorInput