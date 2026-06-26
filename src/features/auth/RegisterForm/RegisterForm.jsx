import './RegisterForm.scss'
import Icon from "@/shared/ui/Icon/index.js";
import Field from "@/shared/ui/Field/index.js";
import Button from "@/shared/ui/Button/index.js";
import {useContext} from "react";
import {AuthContext} from "@/entities/user/model/AuthContext.jsx";

const RegisterForm = () => {

  const { handleToggle } = useContext(AuthContext)


  const soc1alItem = [
    { icon: "vk", href: "/" },
    { icon: "github", href: "/" },
    { icon: "telegram", href: "/" },
    { icon: "gmail", href: "/" },
    { icon: "apple", href: "/" },
  ]

  return (
    <div className="register-form">
      <div className="register-form__inner">
        <div className="register-form__header">
          <ul className="register-form__list">
            {soc1alItem.map(({icon, href}, index) => (
              <li
                className="register-form__item"
                key={index}
              >
                <a
                  className="register-form__link"
                  href={href}
                >
                  <Icon name={icon}/>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="register-form__field">
          <Field
            label="E-mail"
            htmlFor="enter-email"
            id="enter-email"
            type="email"
            placeholder="Enter your email"
          />
          <Field
            label="Password"
            htmlFor="enter-password"
            id="enter-password"
            type="password"
            placeholder="Enter your password"
          />
          <Field
            label="Confirm password"
            htmlFor="confirm-password"
            id="confirm-password"
            type="password"
            placeholder="Confirm your password"
          />
        </div>
        <Button
          className="register-form__button-register"
          label="Register"
        />
        <div className="register-form__footer">
          <div className="register-form__create">
            <Button
              label="Already have account?"
              mode="transparent"
              onClick={handleToggle}
            />
          </div>
          </div>
      </div>
    </div>
  )
}

export default RegisterForm