import './WeatherOverview.scss'
import OverviewCard from "@/shared/ui/OverviewCard/index.js";
import useWeather from "@/entities/weather/model/useWeather.js";
import {windDirection} from "@/entities/weather/lib/windDirection.js";
import Icon from "@/shared/ui/Icon/Icon.jsx";
import {getHumidityLabel} from "@/entities/weather/lib/getHumidityLabel.js";


const WeatherOverview = () => {

  const {
    weather,
    city,
    isLoading,
    error,
    temp,
    humidity,
    feels,
    windSpeed,
    windDeg,
    weatherDesc,
    weatherName,
    fetchWeather,
    setCity,
  } = useWeather()

  return (
    <>
      <section className="weather-overview">
        <h2>Quick overview</h2>
        <div className="weather-overview__card">
          <div className="weather-overview__card-item">
            <OverviewCard
              name="temp"
              iconBg="rgba(239, 194, 125, 0.3)"
              title="Temperature"
              value={`${temp}°C`}
              subtitle={`Feels like ${feels}°C`}
            >
              <p>{weatherDesc}</p>
            </OverviewCard>

            <OverviewCard
              name="cloud"
              iconBg="rgba(200, 220, 240, 0.3)"
              title="Precipitation"
              value="10%"
              subtitle="Chance of rain"
            >
              <p className="weather-overview__cloud">{getHumidityLabel(humidity)}</p>
            </OverviewCard>

            <OverviewCard
              name="wind"
              iconBg="rgba(168, 176, 137, 0.3)"
              title="Wind"
              value={`${windSpeed}km/h`}
              subtitle="Light breeze"
            >
              <div className="weather-overview__direction">
                <div>
                  <p className="weather-overview__comp">{windDirection(windDeg)}</p>
                </div>
                <div className="weather-overview__icon">
                <Icon
                  name="navigation"
                  style={{ transform: `rotate(${windDeg}deg)`}}
                />
                </div>
              </div>
            </OverviewCard>

            <OverviewCard
              name="humidity"
              iconBg="rgba(229, 156, 127, 0.3)"
              title="Humidity"
              value={`${humidity}%`}
              subtitle="Comfortable"
            >
              <div className="weather-overview__progress">
                <progress
                  className="overview-card__progress-bar"
                  value={humidity}
                  max={100}
                />
              </div>
            </OverviewCard>
          </div>
        </div>
      </section>
    </>
  )
}

export default WeatherOverview