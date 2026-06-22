import './Modal.scss'

const Modal = (props) => {
  const {
    children,
  } = props

  return (
    <div className="modal">
      <div className="modal__inner">
        {children}
      </div>
    </div>
  )
}

export default Modal