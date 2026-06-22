import './OverviewCard.scss'
import Icon from "@/shared/ui/Icon/Icon.jsx";

const OverviewCard = (props) => {
  const {
    name,
    title,
    value,
    subtitle,
    children,
    iconBg,
  } = props

  return (
    <div className="overview-card">
      <div className="overview-card__header">
        <div className="overview-card__icon-wrapper" style={{ backgroundColor: iconBg }}>
          <Icon
            name={name}
          />
        </div>
        <h3 className="overview-card__header-title">{title}</h3>
      </div>

      <div className="overview-card__main">
        <p className="overview-card__main-value">{value}</p>
        <p className="overview-card__main-subtitle">{subtitle}</p>
      </div>

      <div className="overview-card__footer">
        <div className="overview-card__footer-children">{children}</div>
      </div>

    </div>
  )
}

export default OverviewCard