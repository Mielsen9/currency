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
    <div className={s.PhoneLink}>
      <PhoneSVG width={32} height={32} />
      <a href= {PHONE_LINK} >
        +(380) 733-965-459
      </a>
    </div>
  )
}

export default PhoneLink