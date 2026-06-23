import './AuthModal.scss'
import classNames from 'classnames'

const AuthModal = (props) => {
  const {
    className,
  } = props

  return (
    <div
      className={classNames(className, 'auth-modal')}
    >
      AuthModal
    </div>
  )
}