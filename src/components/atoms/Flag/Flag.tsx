import * as s from './Flag.module.scss'
import {Rate} from "@/api/goverla";

// Type
interface Props {
  rate: Rate
}

// Flag
const Flag: React.FC<Props> = (props) => {
  const {rate} = props

  return (
    <div className={s.Flag}>
      <img className={s.FlagImj}
        src={`https://flagcdn.com/24x18/${rate.currency.codeAlpha.toLowerCase().slice(0,2)}.png`}
        alt={rate.currency.codeAlpha}
      />
    </div>
  )
}

export default Flag