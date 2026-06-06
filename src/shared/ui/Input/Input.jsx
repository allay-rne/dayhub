import './Input.scss'
import classNames from 'classnames'

const Input = (props) => {
  const {
    className,
    ...rest
  } = props

  return (
    <input
      className={classNames("input", className)}
      {...rest}
    />
  )
}

export default Input