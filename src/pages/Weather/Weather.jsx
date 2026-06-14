import useWeather from "@/entities/weather/model/useWeather.js";
import WeatherHero from "@/widgets/WeatherHero/index.js";
import weatherBanner from "@/shared/assets/image/Hero/weatherLightHero.png";


const Weather = () => {

  const weather = useWeather()
  console.log(weather)


  return(
    <WeatherHero
      img={weatherBanner}
    />
  )
}

export default Weather