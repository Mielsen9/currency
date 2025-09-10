import * as s from './RateItem.module.scss'
import type { Rate } from "@/api/goverla";
import Flag from "@/components/atoms/Flag";
import formatCurrency from "@/shared/utils/formatCurrency";

// Type
interface Props {
  rate: Rate;
}

// RateItem
const RateItem: React.FC<Props> = (props) => {
  const { rate } = props

  return (
    <li className={s.RateItem}>
      <div className={s.Currency}>
        <Flag rate={rate}/>
        {rate.currency.codeAlpha}
      </div>
      <div className={s.Value}>
        {formatCurrency(rate.bid.absolute, { isCents: true })}
      </div>
      <div className={s.Value}>
        {formatCurrency(rate.ask.absolute, { isCents: true })}
      </div>
    </li>
  )
}

export default RateItem