import './LodinForm.scss'
import classNames from 'classnames'

const LodinForm = (props) => {
  const {
    className,
  } = props

  return (
    <div
      className={classNames(className, 'lodin-form')}
    >
      LodinForm
    </div>
  )
}