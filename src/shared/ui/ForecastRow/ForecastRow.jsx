import './ForecastRow.scss'
import Icon from "@/shared/ui/Icon/Icon.jsx";

const ForecastRow = (props) => {
  const {
    date,
    name,
    weatherDesc,
    tempMax,
    tempMin,
  } = props

  return (
    <article className="forecast-row">
      <p className="forecast-row__date">{date}</p>
      <div className="forecast-row__main">
        <Icon name={name} />
        <div>
          <p className="forecast-row__temp">{tempMax}° / {tempMin}°</p>
          <p className="forecast-row__desc">{weatherDesc}</p>
        </div>
      </div>
    </article>
  )
}

export default ForecastRow