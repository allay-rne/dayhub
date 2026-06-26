import './LoginForm.scss'
import Field from "@/shared/ui/Field/index.js";
import Button from "@/shared/ui/Button/index.js";
import Icon from "@/shared/ui/Icon/Icon.jsx";
import {useContext, useState} from "react";
import {AuthContext} from "@/entities/user/model/AuthContext.jsx";

const LoginForm = () => {

  const { handleToggle, handleLogin } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const soc1alItem = [{
    icon: "vk", href: "/",
  }, {
    icon: "github", href: "/",
  }, {
    icon: "telegram", href: "/",
  }, {
    icon: "gmail", href: "/",
  }, {
    icon: "apple", href: "/",
  },]

  return (<div className="login-form">
    <div className="login-form__inner">
      <div className="login-form__header">
        <ul className="login-form__list">
          {soc1alItem.map(({icon, href}, index) => (<li
            className="login-form__item"
            key={index}
          >
            <a
              className="login-form__link"
              href={href}
            >
              <Icon name={icon} />
            </a>
          </li>))}
        </ul>
      </div>
      <div className="login-form__field">
        <Field
          label="E-mail"
          htmlFor="enter-email"
          id="enter-email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Field
          label="Password"
          htmlFor="enter-password"
          id="enter-password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="login-form__remember">
        <input
          type="checkbox"
          id="remember"
        />
        <label htmlFor="remember">Remember Me</label>
      </div>
      <Button
        className="login-form__button-login"
        label="Log in"
        onClick={() => handleLogin(email, password)}
      />
      <div className="login-form__footer">
        <Button
          className="login-form__link-btn"
          label="Forgot your password?"
          mode="transparent"
        />
        <Button
          className="login-form__link-btn"
          label="Reset Password"
          mode="transparent"
        />
        <div className="login-form__create">
          <Button
            label="Create Account"
            mode="transparent"
            onClick={handleToggle}
          />
        </div>
      </div>
    </div>
  </div>)
}

export default LoginForm