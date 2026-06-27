import './Header.scss'
import classNames from 'classnames'
import Logo from "@/shared/ui/Logo/index.js";
import Button from "@/shared/ui/Button";
import {useContext} from "react";
import {AuthContext} from "@/entities/user/model/AuthContext.jsx";
import UserDropdown from "@/features/auth/UserDropdown/index.js";
import ThemeButton from "@/app/providers/theme/ThemeButton/index.js";
import {Link} from "react-router-dom";

const Header = (props) => {
  const {
    url,
  } = props

  const {
    isLoggedIn,
    isDropdownOpen,
    handleOpen,
    handleDropdownToggle
  } = useContext(AuthContext)

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
              <li
                className="header__menu-item"
                key={href}
              >
                <Link
                  className={classNames('header__menu-link', {
                    'is-active': href === url
                  })}
                  to={href}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
         <ThemeButton />

          <Button
            className="header__button"
            label="Login"
            isLabelHidden
            mode="transparent"
            iconName={isLoggedIn ? "personCheck" : "user"}
            iconPosition='before'
            onClick={isLoggedIn ? handleDropdownToggle : handleOpen}
          />
        </div>
        {isLoggedIn && isDropdownOpen && <UserDropdown />}
      </div>
    </header>
  )
}

export default Header