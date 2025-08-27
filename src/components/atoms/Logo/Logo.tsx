import * as s from './Logo.module.scss'

// Type
interface Props {

}

// Logo
const Logo: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className={s.Logo}>
      <p>Currency Calculator</p>
    </div>
  )
}

export default Logo