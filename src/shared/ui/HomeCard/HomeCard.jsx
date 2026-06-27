import './HomeCard.scss'
import Icon from "@/shared/ui/Icon";

const HomeCard = (props) => {
  const {
    name,
    title,
    value,
    subtitle,
    children,
    iconBg,
  } = props

  return (
    <article className="home-card">
      <div className="home-card__header">
        <div
          className="home-card__icon"
          style={{ backgroundColor: iconBg }}>
          <Icon name={name} />
        </div>
        <h3 className="home-card__header-title">{title}</h3>
      </div>

      <div className="home-card__main">
        <p className="home-card__main-value">{value}</p>
        <p className="home-card__main-subtitle">{subtitle}</p>
      </div>

      {children && <div className="home-card__footer">
        {children}
      </div>
      }

    </article>
  )
}

export default HomeCard