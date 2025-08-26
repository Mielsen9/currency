import * as s from './CurrencyCalculator.module.scss'

// Type
interface Props {

}

// CurrencyCalculator
const CurrencyCalculator: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className={s.CurrencyCalculator}>
      CurrencyCalculator
    </div>
  )
}

export default CurrencyCalculator