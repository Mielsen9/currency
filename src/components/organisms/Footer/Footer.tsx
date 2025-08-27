import * as s from './Footer.module.scss'

// Type
interface Props {

}

// Footer
const Footer: React.FC<Props> = (props) => {
  const {} = props

  return (
    <h5 className={s.Footer}>
      <div className={s.FooterDescription}>
        <p>Калькулятор для обміну валют.</p>
        <p>Надійність та конфіденційність.</p>
        <p>© 2023-2024</p>
        <p>Усі права застережені.</p>
      </div>
      <p>Currency Calculator</p>
    </h5>
  )
}

export default Footer