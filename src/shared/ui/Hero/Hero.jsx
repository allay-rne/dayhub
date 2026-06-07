import './Hero.scss'
import classNames from 'classnames'

const Hero = (props) => {
  const {
    className,
    img,
    title,
    subtitle,
  } = props

  return (
   <section
     className={classNames(className, 'hero')}
     style={{
       backgroundImage: `url(${img})`,
       backgroundSize: "100%",
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat',
   }}
   >
     <div className="hero__content">
     <h1 className="hero__title">{title}</h1>
     <p className="hero__description">{subtitle}</p>
     </div>
   </section>
  )
}

export default Hero