import './RegisterForm.scss'
import classNames from 'classnames'

const RegisterForm = (props) => {
  const {
    className,
  } = props

  return (
    <div
      className={classNames(className, 'register-form')}
    >
      RegisterForm
    </div>
  )
}