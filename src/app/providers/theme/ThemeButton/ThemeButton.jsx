import './ThemeButton.scss'
import Icon from "@/shared/ui/Icon/Icon.jsx";
import {ThemeContext,} from "@/app/providers/theme/model/ThemeContext.jsx";
import {useContext} from "react";

const ThemeButton = () => {

  const { toggleTheme, handleToggleTheme } = useContext(ThemeContext)

  return (
    <div className="theme-button">
      <div className="theme-button__inner">
        <Icon
          name="sun"
        />
        <label className="theme-button__toggle-switch">
          <input
            type="checkbox"
            id="theme-toggle"
            onChange={handleToggleTheme}
            checked={toggleTheme}
          />
          <span className="theme-button__slider"></span>
        </label>
        <Icon
          name="moon"
        />
      </div>
    </div>
  )
}

export default ThemeButton