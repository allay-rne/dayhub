import './LoginForm.scss'
import Field from "@/shared/ui/Field/index.js";
import Button from "@/shared/ui/Button/index.js";
import Icon from "@/shared/ui/Icon/Icon.jsx";
import useLoginForm from "@/features/auth/model/useLoginForm.js";
import {soc1alItem} from "@/features/auth/config/soc1als.js";

const LoginForm = () => {

  const {
    email,
    password,
    handleToggle,
    isPasswordVisible,
    errors,
    handleSubmit,
    handleTogglePassword,
    handleEmailChange,
    handlePasswordChange,
  } = useLoginForm()

  return (
    <div className="login-form">
      <div className="login-form__inner">
        <div className="login-form__header">
          <ul className="login-form__list">
            {soc1alItem.map(({icon, href}, index) => (
              <li className="login-form__item" key={index}>
                <a className="login-form__link" href={href}>
                  <Icon name={icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="login-form__field">
          <div className="login-form__field-wrap">
            <Field
              className={errors.email ? 'login-form__field--error' : ''}
              label="E-mail"
              htmlFor="enter-email"
              id="enter-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
            />
            {errors.email && <span className="login-form__error">{errors.email}</span>}
          </div>
          <div className="login-form__field-wrap">
            <div className="login-form__password-wrap">
              <Field
                className={errors.password ? 'login-form__field--error' : ''}
                label="Password" htmlFor="enter-password" id="enter-password"
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
              >
              <Button
                iconName={isPasswordVisible ? 'visibilityOff' : 'visibility'}
                isLabelHidden
                iconPosition="before"
                label="Toggle password"
                mode="transparent"
                onClick={handleTogglePassword}
              />
              </Field>
            </div>
          </div>
        </div>
        <div className="login-form__remember">
          <input
            type="checkbox"
            id="remember"
          />
          <label htmlFor="remember">
            Remember Me
          </label>
        </div>
        <Button className="login-form__button-login" label="Log in" onClick={handleSubmit} />
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
    </div>
  )
}

export default LoginForm