import './HomeCard.scss'
import classNames from 'classnames'

const HomeCard = (props) => {
  const {
    className,
  } = props

  return (
    <div
      className={classNames(className, 'home-card')}
    >
      HomeCard
    </div>
  )
}