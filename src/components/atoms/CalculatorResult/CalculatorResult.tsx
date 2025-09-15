import * as s from './CalculatorResult.module.scss'
import {memo} from "react";

// Type
interface Props {
  result: string
}

// CalculatorResult
const CalculatorResult: React.FC<Props> = memo((props) => {
  const {result} = props

  return (
    <div className={s.CalculatorResult}>
      <p>{result}</p>
    </div>
  )
});

export default CalculatorResult