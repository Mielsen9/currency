import * as s from './ContactLinks.module.scss'
import PhoneLink from "@/components/atoms/PhoneLink";
import TelegramLink from "@/components/atoms/TelegramLink";

// Type
interface Props {

}

// ContactLinks
const ContactLinks: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className={s.ContactLinks}>
      <TelegramLink/>
      <PhoneLink />
    </div>
  )
}

export default ContactLinks