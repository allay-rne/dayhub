import './HomeHero.scss'
import Button from "@/shared/ui/Button";

const HomeHero = (props) => {
  const {
    img,
  } = props

  return (
    <section
      className="home-hero"
      style={{
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    >
      <div className="home-hero__inner">
        <div className="home-hero__content">
          <h1 className="home-hero__title">Welcome back!</h1>
          <p className="home-hero__description">Everything you need, on one place.</p>
          <Button
            className="home-hero__button"
            label="Let's get started"
            href="#"
          />
        </div>
      </div>
    </section>

  )
}

export default HomeHero