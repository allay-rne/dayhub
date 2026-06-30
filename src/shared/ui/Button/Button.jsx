import './Button.scss'
import classNames from 'classnames'
import Icon from "@/shared/ui/Icon"
import {Link} from "react-router-dom";

const Button = (props) => {
  const {
    className,
    type = 'button',
    href,
    target,
    /*'' - default | 'transparent' | 'filter' | 'danger' | 'hero'*/
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
  const isExternal = href?.startsWith('http') || href?.startsWith('//')
  const Component = isExternal ? 'a' : isLink ? Link : 'button'
  const linkProps = isExternal
    ? { href, target }
    : { to: href, target }
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
        <span className="button__label">{label}</span>
      )}
      {iconPosition === 'after' && iconComponent}
    </Component>
  )
}

export default Button