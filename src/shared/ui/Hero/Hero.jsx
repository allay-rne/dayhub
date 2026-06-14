import './Hero.scss'
import classNames from 'classnames'

const Hero = (props) => {
  const {
    className,
    img,
    title,
    subtitle,
    children,
  } = props

  return (
   <section
     className={classNames(className, 'weather-hero')}
     style={{
       backgroundImage: `url(${img})`,
       backgroundSize: "cover",
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat',
   }}
   >
     <div className="hero__inner">
     <div className="hero__content">
     <h1 className="hero__title">{title}</h1>
     <p className="hero__description">{subtitle}</p>
     </div>
       {children && <div className="hero__action">{children}</div>}
     </div>
   </section>
  )
}

export default Hero