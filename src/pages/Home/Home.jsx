import HomeHero from "@/widgets/HomeHero/index.js";
import homeBanner from "@/shared/assets/image/Hero/homeLightHero.png"
import HomeOverview from "@/widgets/HomeOverview/index.js";

const Home = () => {


  return (
    <div className="home">
      <HomeHero
        img={homeBanner}
      />
      <HomeOverview />
    </div>
  )
}

export default Home