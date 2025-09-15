import * as s from './TelegramLink.module.scss'
import TelegramSVG from "@/asset/images/svgicons/telegram.svg";
// Type
interface Props {

}

// TelegramLink
const TelegramLink: React.FC<Props> = (props) => {
  const {} = props

  return (
    <a href="https://t.me/Petro_Zvir"
       target="_blank"
       className={s.TelegramLink}
    >
      <TelegramSVG width={32} height={32} />
      <p>Написати у Telegram.</p>
    </a>
  )
}

export default TelegramLink