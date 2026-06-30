import './Header.scss'
import classNames from 'classnames'
import Logo from "@/shared/ui/Logo/index.js";
import Button from "@/shared/ui/Button";
import {useContext} from "react";
import { CSSTransition } from 'react-transition-group';
import {AuthContext} from "@/entities/user/model/AuthContext.jsx";
import UserDropdown from "@/features/auth/UserDropdown/index.js";
import ThemeButton from "@/app/providers/theme/ThemeButton/index.js";
import {Link} from "react-router-dom";
import useBurger from "@/widgets/Header/model/useBurger.js";
import BurgerButton from "@/shared/ui/BurgerButton/index.js";

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

  const {
    isActive,
    handleToggleMenu,
    burgerRef,
  } = useBurger()

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


        <nav className="header__menu hidden-mobile">
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
            className="header__button hidden-mobile"
            label="Login"
            isLabelHidden
            mode="transparent"
            iconName={isLoggedIn ? "personCheck" : "user"}
            iconPosition='before'
            onClick={isLoggedIn ? handleDropdownToggle : handleOpen}
          />
          <BurgerButton
            isActive={isActive}
            handleToggleMenu={handleToggleMenu}
          />
        </div>

        <CSSTransition
          in={isActive}
          timeout={300}
          classNames="header__mobile"
          nodeRef={burgerRef}
          unmountOnExit
        >
          <div className="header__mobile" ref={burgerRef}>

            <div className="header__mobile-header">
              <Logo
                className="header__logo"
                loading="eager"
              />

              <BurgerButton
                isActive={isActive}
                handleToggleMenu={handleToggleMenu}
              />
            </div>

            <nav className="header__mobile-menu">
              <ul className="header__mobile-menu-list">
                {menuItems.map(({label, href}) => (
                  <li
                    className="header__mobile-menu-item"
                    key={href}
                  >
                    <Link
                      className={classNames('header__mobile-menu-link', {
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

            <div className="header__mobile-actions">
              <ThemeButton />
              <Button
                className="header__mobile-button"
                label="Login"
                isLabelHidden
                mode="transparent"
                iconName={isLoggedIn ? "personCheck" : "user"}
                iconPosition='before'
                onClick={isLoggedIn ? handleDropdownToggle : handleOpen}
              />
            </div>

          </div>
        </CSSTransition>
        {isLoggedIn && isDropdownOpen && <UserDropdown />}
      </div>
    </header>
  )
}

export default Header