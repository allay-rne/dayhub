import HomeHero from "@/widgets/HomeHero/index.js";
import homeBanner from "@/shared/assets/image/Hero/homeLightHero.png"

const Home = () => {


  return (
    <div className="home">
      <HomeHero
        img={homeBanner}
      />
    </div>
  )
}

export default Home