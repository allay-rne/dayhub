import './Header.scss'
import classNames from 'classnames'
import Logo from "@/shared/ui/Logo/index.js";
import Button from "@/shared/ui/Button";

const Header = (props) => {
  const {
    url,
  } = props
  
  const menuItems = [
    {
      label: 'Home',
      href: '/',
    },

    {
      label: 'Todo',
      href: '/todo',
    },

    {
      label: 'Notes',
      href: '/notes',
    },

    {
      label: 'Weather',
      href: '/weather',
    },
  ]

  return (
<header className="header">
  <div
    className="header__inner container"
  >
    <Logo
      className="header__logo"
      loading="eager"
    />


  <nav className="header__menu">
    <ul className="header__menu-list">
      {menuItems.map(({label, href}) => (
        <li className="header__menu-item" key={href}>
          <a
            className={classNames('header__menu-link',{
              'is-active': href === url
            })}
            href={href}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>

    <div className="header__actions">
     <Button
      className="header__button"
      label="Toggle theme"
      isLabelHidden
      mode="transparent"
      iconName="sun"
      iconPosition = 'before'
     />

      <Button
        className="header__button"
        label="Login"
        isLabelHidden
        mode="transparent"
        iconName="user"
        iconPosition = 'before'
      />
    </div>
</div>
</header>
  )
}

export default Header