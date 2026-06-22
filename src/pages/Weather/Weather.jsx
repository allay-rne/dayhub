import useWeather from "@/entities/weather/model/useWeather.js";
import WeatherHero from "@/widgets/WeatherHero/index.js";
import weatherBanner from "@/shared/assets/image/Hero/weatherLightHero.png";
import WeatherOverview from "@/widgets/WeatherOverview/index.js";
import WeatherForecast from "@/widgets/WeatherForecast/index.js";


const Weather = () => {

  const weather = useWeather()
  console.log(weather)


  return (
    <div className="weather">
      <WeatherHero
        img={weatherBanner}
      />
      <WeatherOverview />
      <WeatherForecast />
    </div>
  )
}

export default Weather