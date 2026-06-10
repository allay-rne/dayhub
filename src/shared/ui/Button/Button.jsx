import './Button.scss'
import classNames from 'classnames'
import Icon from "@/shared/ui/Icon"

const Button = (props) => {
  const {
    className,
    type = 'button',
    href,
    target,
    /*'' - default | 'transparent' | 'filter' | 'danger'*/
    mode = '',
    label,
    isLabelHidden = false,
    iconName,
    iconPosition,
    hasFillIcon,
    isFavorite,
    ...rest
  } = props


  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = {href, target}
  const buttonProps = {type}
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon
      className="button__icon"
      name={iconName}
      isFavorite={isFavorite}
      hasFill={hasFillIcon}
    />
  )


  return (
    <Component
      className={classNames(className, 'button', {
        [`button--${mode}`]: mode,
      })}
      title={title}
      aria-label={title}
      {...specificProps}
      {...rest}
    >
      {iconPosition === 'before' && iconComponent}
      {!isLabelHidden && (
        <span className="button__label" >{label}</span>
      )}
      {iconPosition === 'after' && iconComponent}
    </Component>
  )
}

export default Button