import * as s from './CalculatorResult.module.scss'

// Type
interface Props {
  result: number
}

// CalculatorResult
const CalculatorResult: React.FC<Props> = (props) => {
  const {result} = props

  return (
    <div className={s.CalculatorResult}>
      <p>{result}</p>
    </div>
  )
}

export default CalculatorResult