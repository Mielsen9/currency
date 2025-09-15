import * as s from './PhoneLink.module.scss'
import {PHONE_LINK} from "@/components/atoms/PhoneLink/constants";
import PhoneSVG from "@/asset/images/svgicons/telephone.svg"

// Type
interface Props {

}

// PhoneLink
const PhoneLink: React.FC<Props> = (props) => {
  const {} = props

  return (
    <a href= {PHONE_LINK}
       className={s.PhoneLink}>
      <PhoneSVG width={32} height={32} />
      <p>+(380) 733-965-459</p>
    </a>
  )
}

export default PhoneLink