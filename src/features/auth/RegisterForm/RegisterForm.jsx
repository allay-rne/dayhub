import './RegisterForm.scss'
import Icon from "@/shared/ui/Icon/index.js";
import Field from "@/shared/ui/Field/index.js";
import Button from "@/shared/ui/Button/index.js";
import {soc1alItem} from "@/features/auth/config/soc1als.js";
import useRegisterForm from "@/features/auth/model/useRegisterForm.js";

const RegisterForm = () => {

  const {
    email,
    password,
    confirmPassword,
    handleToggle,
    isPasswordVisible,
    errors,
    handleSubmit,
    handleTogglePassword,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
  } = useRegisterForm()

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
          <div className="register-form__field-wrap">
          <Field
            className={errors.email ? 'register-form__field--error' : ''}
            label="E-mail"
            htmlFor="enter-email"
            id="enter-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
          />
          {errors.email && <span className="register-form__error">{errors.email}</span>}
          </div>
          <div className="register-form__field-wrap">
          <Field
            className={errors.email ? 'register-form__field--error' : ''}
            label="Password"
            htmlFor="enter-password"
            id="enter-password"
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
          {errors.password && <span className="register-form__error">{errors.password}</span>}
          </div>
          <div className="register-form__field-wrap">
          <Field
            className={errors.email ? 'register-form__field--error' : ''}
            label="Confirm password"
            htmlFor="confirm-password"
            id="confirm-password"
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e)=> handleConfirmPasswordChange((e.target.value))}
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
          {errors.confirmPassword && <span className="register-form__error">{errors.confirmPassword}</span>}
          </div>
        </div>
        <Button
          className="register-form__button-register"
          label="Register"
          onClick={handleSubmit}
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