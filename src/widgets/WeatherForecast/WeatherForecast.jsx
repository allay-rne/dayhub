import './WeatherForecast.scss'
import ForecastRow from "@/shared/ui/ForecastRow/index.js";
import useForecast from "@/entities/weather/model/useForecast.js";
import {getDayTemps} from "@/entities/weather/lib/getDayTemps.js";
import {formatDate} from "@/shared/lib/date.js";
import {getWeatherIcon} from "@/entities/weather/lib/getWeatherIcon.js";

const WeatherForecast = () => {

  const {
    weatherByDay,
  } = useForecast()

  return (
    <section className="weather-forecast">
      <h3 className="weather-forecast__title">5-day forecast</h3>
      <ul className="weather-forecast__list">
        {Object.entries(weatherByDay).slice(0, 5).map(([date, items]) => {
          const {tempMax, tempMin} = getDayTemps(items)
          return (
            <li key={date}>
              <ForecastRow
                date={formatDate(date)}
                tempMax={Math.round(tempMax)}
                tempMin={Math.round(tempMin)}
                weatherDesc={items[0].weather[0].description}
                name={getWeatherIcon(items[0].weather[0].description)}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default WeatherForecast