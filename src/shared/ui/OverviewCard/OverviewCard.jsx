import './OverviewCard.scss'
import classNames from 'classnames'

const OverviewCard = (props) => {
  const {
    className,
  } = props

  return (
    <div
      className={classNames(className, 'overview-card')}
    >
      OverviewCard
    </div>
  )
}