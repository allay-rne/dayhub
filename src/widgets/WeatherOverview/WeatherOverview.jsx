import './WeatherOverview.scss'
import OverviewCard from "@/shared/ui/OverviewCard/index.js";
import useWeather from "@/entities/weather/model/useWeather.js";
import {windDirection} from "@/entities/weather/lib/windDirection.js";
import Icon from "@/shared/ui/Icon/Icon.jsx";


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
              title="Temperature"
              value={`${temp}°C`}
              subtitle={`Feels like ${feels}°C`}
            >
              <p>{weatherDesc}</p>
            </OverviewCard>

            <OverviewCard
              name="cloud"
              title="Precipitation"
              value="10%"
              subtitle="заглушка"
            >
              <p className="weather-overview__cloud">No umbrella needed today</p>
            </OverviewCard>

            <OverviewCard
              name="wind"
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
                />
                </div>
              </div>
            </OverviewCard>

            <OverviewCard
              name="humidity"
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