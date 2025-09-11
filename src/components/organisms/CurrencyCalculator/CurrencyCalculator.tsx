import * as s from './CurrencyCalculator.module.scss'
import CalculatorInput from "@/components/atoms/CalculatorInput";
import CalculatorResult from "@/components/atoms/CalculatorResult";
import {useCalculator} from "@/features/CurrencyCalculatorLogic/useCalculator";
import {Rate} from "@/api/goverla";
import {useEffect, useState} from "react";
import CurrencySelector from "@/components/atoms/CurrencySelector";

// Type
interface Props {
  rates: Rate[]
}

// CurrencyCalculator
const CurrencyCalculator: React.FC<Props> = (props) => {
  const {rates} = props
  const [rate, setRate] = useState<number>(0);
  const { value, result, handleChange } = useCalculator(0);

  // встановлюємо перший курс за замовчуванням
  useEffect(() => {
    if (rates.length > 0 && rate === 0) {
      setRate(Number(rates[0].bid.absolute));
    }
  }, [rates, rate]);

  // 🔥 перерахунок при зміні курсу
  useEffect(() => {
    if (rate > 0) {
      handleChange(value, rate);
    }
  }, [rate, value, handleChange]);

  return (
    <div className={s.CurrencyCalculator}>
      <h1 className={s.title}>Ведіть суму для розрахунку</h1>
      <div className={s.ContainerInput}>
        <CalculatorInput
          value={value}
          onChange={(val) => handleChange(val, rate)}
        />
        <CurrencySelector
          rate={rate}
          onChange={setRate}
          options={rates.map((r) => ({
            label: r.currency.codeAlpha,
            value: Number(r.bid.absolute),
          }))}
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