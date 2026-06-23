import './HomeHero.scss'
import classNames from 'classnames'

const HomeHero = (props) => {
  const {
    className,
  } = props

  return (
    <div
      className={classNames(className, 'home-hero')}
    >
      HomeHero
    </div>
  )
}