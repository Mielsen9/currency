import * as s from './Header.module.scss'

// Type
interface Props {

}

// Header
const Header: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className={s.Header}>
      Header
    </div>
  )
}

export default Header