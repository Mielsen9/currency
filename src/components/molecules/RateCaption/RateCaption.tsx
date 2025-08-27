import * as s from './RateCaption.module.scss'

// Type
interface Props {

}

// RateCaption
const RateCaption: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className={s.RateCaption}>
      <header>Курс Валют</header>
      <time>27/08/25</time>
    </div>
  )
}

export default RateCaption