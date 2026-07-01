import WeatherHero from "@/widgets/WeatherHero/index.js";
import weatherBanner from "@/shared/assets/image/Hero/weatherLightHero.png";
import WeatherOverview from "@/widgets/WeatherOverview/index.js";
import WeatherForecast from "@/widgets/WeatherForecast/index.js";
import {useContext} from "react";
import {ThemeContext} from "@/app/providers/theme/model/ThemeContext.jsx";
import weatherDarkBanner from "@/shared/assets/image/Hero/weatherDarkHero.png"
import {Helmet} from "react-helmet-async";


const Weather = () => {

  const {toggleTheme} = useContext(ThemeContext)

  return (
    <>
      <Helmet>
        <title>DayHub | Weather</title>
      </Helmet>
      <main className="weather">
        <WeatherHero
          img={!toggleTheme ? weatherBanner : weatherDarkBanner}
        />
        <WeatherOverview />
        <WeatherForecast />
      </main>
    </>
  )
}

export default Weather