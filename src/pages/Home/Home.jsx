import HomeHero from "@/widgets/HomeHero/index.js";
import homeBanner from "@/shared/assets/image/Hero/homeLightHero.png"
import homeDarkBanner from "@/shared/assets/image/Hero/homeDarkHero.png"
import HomeOverview from "@/widgets/HomeOverview/index.js";
import {useContext} from "react";
import {ThemeContext,} from "@/app/providers/theme/model/ThemeContext.jsx";
import {Helmet} from "react-helmet-async";

const Home = () => {

  const {toggleTheme} = useContext(ThemeContext)

  return (
    <>
      <Helmet>
        <title>DayHub</title>
        <meta
          property="og:title"
          content="DayHub"
        />
        <meta
          property="og:description"
          content="Personal productivity dashboard"
        />
        <meta
          property="og:image"
          content="https://dayhub.vercel.app/preview.png"
        />
        <meta
          property="og:url"
          content="https://dayhub.vercel.app"
        />
        <meta
          property="og:type"
          content="website"
        />
      </Helmet>
      <main className="home">
        <HomeHero
          img={!toggleTheme ? homeBanner : homeDarkBanner}
        />
        <HomeOverview />
      </main>
    </>
  )
}

export default Home