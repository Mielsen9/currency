import * as s from './RateItem.module.scss'
import type { Rate } from "@/api/goverla";

// Type
interface Props {
  rate: Rate;
}

// RateItem
const RateItem: React.FC<Props> = (props) => {
  const { rate } = props

  return (
    <li>
      {rate.currency.name} ({rate.currency.codeAlpha}) →
      Купівля: {rate.bid.absolute}, Продаж: {rate.ask.absolute}
    </li>
  )
}

export default RateItem