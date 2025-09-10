import * as s from './RateCaption.module.scss'
import {Point} from "@/api/goverla";

// Type
interface Props {
  point: Point
}

// RateCaption
const RateCaption: React.FC<Props> = (props) => {
  const { point } = props

  return (
    <div className={s.RateCaption}>
      <header>Курс Валют</header>
      <time>{new Date(point.updatedAt).toLocaleDateString('uk-UA')}</time>
    </div>
  )
}

export default RateCaption