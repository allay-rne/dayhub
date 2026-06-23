import './HomeOverview.scss'
import classNames from 'classnames'

const HomeOverview = (props) => {
  const {
    className,
  } = props

  return (
    <div
      className={classNames(className, 'home-overview')}
    >
      HomeOverview
    </div>
  )
}