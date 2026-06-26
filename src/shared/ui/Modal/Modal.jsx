import './Modal.scss'
import classNames from 'classnames'


const Modal = (props) => {
  const {
    className,
    children,
  } = props

  return (
    <div className={classNames(className, "modal")}>
      <div className="modal__inner">
        {children}
      </div>
    </div>
  )
}

export default Modal