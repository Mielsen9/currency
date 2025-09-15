import * as s from './CurrencyCalculator.module.scss'
import CalculatorInput from "@/components/atoms/CalculatorInput";
import CalculatorResult from "@/components/atoms/CalculatorResult";
import {useCalculator} from "@/hook/useCalculator";
import {FC, useCallback, useEffect, useMemo, useState} from "react";
import CurrencySelector from "@/components/atoms/CurrencySelector";
import {Rate} from "@/types";

// Type
interface CurrencyCalculatorProps {
  rates: Rate[]
}

// CurrencyCalculator
const CurrencyCalculator: FC<CurrencyCalculatorProps> = (props) => {
  const {rates} = props
  const [inputValue, setInputValue] = useState<string>("");
  const [rate, setRate] = useState<number>(0);
  const {result, handleChange } = useCalculator();

  // встановлюємо перший курс за замовчуванням
  useEffect(() => {
    if (rates.length > 0 && rate === 0) {
      setRate(Number(rates[0].bid.absolute));
    }
  }, [rates, rate]);

  //  перерахунок при зміні курсу
  useEffect(() => {
    if (rate > 0) {
      handleChange(inputValue, rate);
    }
  }, [rate, inputValue, handleChange]);

  const handleInputChange = useCallback((value: string) => {
    handleChange(value, rate);
    setInputValue(value);
  },[inputValue])

  const optionsCurrencySelector = useMemo(
    () =>
      rates.map((r) => ({
        label: r.currency.codeAlpha,
        value: Number(r.bid.absolute),
      })),
    [rates]
  );

  return (
    <div className={s.CurrencyCalculator}>
      <h1 className={s.title}>Ведіть суму для розрахунку</h1>
      <div className={s.ContainerInput}>
        <CalculatorInput
          value={inputValue}
          onChange={handleInputChange}
        />
        <CurrencySelector
          rate={rate}
          onChange={setRate}
          options={optionsCurrencySelector}
        />
      </div>
      <h2 className={s.title}>Результат</h2>
      <div className={s.ContainerResult}>
        <CalculatorResult result={result} />
      </div>
    </div>
  )
}

export default CurrencyCalculator