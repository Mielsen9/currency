import * as s from './Header.module.scss'
import Logo from "@/components/atoms/Logo";
import ContactLinks from "@/components/molecules/ContactLinks";

// Type
interface Props {

}

// Header
const Header: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className={s.Header}>
      <Logo/>
      <ContactLinks />
    </div>
  )
}

export default Header