import WeatherHero from "@/widgets/WeatherHero/index.js";
import weatherBanner from "@/shared/assets/image/Hero/weatherLightHero.png";
import WeatherOverview from "@/widgets/WeatherOverview/index.js";
import WeatherForecast from "@/widgets/WeatherForecast/index.js";
import {useContext} from "react";
import {ThemeContext} from "@/app/providers/theme/model/ThemeContext.jsx";
import weatherDarkBanner from "@/shared/assets/image/Hero/weatherDarkHero.png"

const Weather = () => {

  const { toggleTheme } = useContext(ThemeContext)

  return (
    <main className="weather">
      <WeatherHero
        img={!toggleTheme ? weatherBanner : weatherDarkBanner}
      />
      <WeatherOverview />
      <WeatherForecast />
    </main>
  )
}

export default Weather