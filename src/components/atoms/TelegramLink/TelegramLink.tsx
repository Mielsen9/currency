import * as s from './TelegramLink.module.scss'
import TelegramSVG from "@/asset/images/svgicons/telegram.svg";
// Type
interface Props {

}

// TelegramLink
const TelegramLink: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className={s.TelegramLink}>
      <TelegramSVG width={32} height={32} />
      <a href="https://t.me/Petro_Zvir"
         target="_blank"
      >Написати у Telegram.
      </a>
    </div>
  )
}

export default TelegramLink