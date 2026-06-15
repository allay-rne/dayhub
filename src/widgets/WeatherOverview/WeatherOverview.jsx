import './WeatherOverview.scss'
import classNames from 'classnames'

const WeatherOverview = (props) => {
  const {
    className,
  } = props

  return (
    <div
      className={classNames(className, 'weather-overview')}
    >
      WeatherOverview
    </div>
  )
}