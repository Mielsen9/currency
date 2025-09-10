import * as s from './RateHeader.module.scss'

// Type
interface Props {

}

// RateHeader
const RateHeader: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className={s.RateHeader}>
      <p className={s.Currency}>Валюта</p>
      <p className={s.Value}>Купівля</p>
      <p className={s.Value}>Продаж</p>
    </div>
  )
}

export default RateHeader