import './HomeCard.scss'
import Icon from "@/shared/ui/Icon";

const HomeCard = (props) => {
  const {
    name,
    title,
    value,
    subtitle,
    children,
  } = props

  return (
    <div className="home-card">
      <div className="home-card__header">
        <Icon name={name} />
        <h3 className="home-card__header-title">{title}</h3>
      </div>

      <div className="home-card__main">
        <p className="home-card__main-value">{value}</p>
        <p className="home-card__subtitle">{subtitle}</p>
      </div>

      {children && <div className="home-card__footer">
        {children}
      </div>
      }

    </div>
  )
}

export default HomeCard