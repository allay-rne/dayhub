import './WeatherHero.scss'
import classNames from "classnames";
import Button from "@/shared/ui/Button/index.js";
import useWeather from "@/entities/weather/model/useWeather.js";
import {CITIES} from "@/entities/weather/lib/cities.js";
import Icon from "@/shared/ui/Icon/Icon.jsx";
import {getWeatherIcon} from "@/entities/weather/lib/getWeatherIcon.js";

const WeatherHero = (props) => {
  const {
    className,
    img,
  } = props

  const {
    weather,
    city,
    isLoading,
    error,
    temp,
    humidity,
    feels,
    windSpeed,
    weatherDesc,
    weatherName,
    fetchWeather,
    setCity,
  } = useWeather()


  return (
    <section
      className={classNames(className, 'weather-hero')}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="weather-hero__inner">

        <div className="weather-hero__content">
          <h1 className="weather-hero__title">Weather</h1>
          <p className="weather-hero__description">Current conditions and forecast for you location.</p>
          <Button
            label="View full forecast"
          />
        </div>
        <div className="weather-hero__weather-block">
          <select
            className="weather-hero__select"
            onChange={(event) => {
              setCity(event.target.value)
              fetchWeather(event.target.value)
            }}
          >
            {CITIES.map(({city, country}) => {
              return <option
                key={city}
                value={city}
              >
                {city}, {country}
              </option>
            })}
          </select>
          <div className="weather-hero__weather">
            <div className="weather-hero__weather-today">
              <div className="weather-hero__weather-temp"> {temp}°C</div>
              <Icon
                className="weather-hero__icon-sun"
                name={getWeatherIcon(weatherDesc)}
              />
            </div>
            <div className="weather-hero__weather-description">{weatherDesc}</div>
            <div className="weather-hero__weather-feels">Feels like {feels}°C</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeatherHero
