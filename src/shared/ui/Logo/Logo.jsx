import './Logo.scss'
import classNames from 'classnames'

const Logo = (props) => {
  const {
    className,
    loading = 'lazy',
  } = props

  const title = 'Home'

  return (
    <a
      className="logo"
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        className={classNames(className, 'logo')}
        src="/LogoDayHub.svg"
        alt=""
        width={80}
        height={50}
        loading={loading}
      />

    </a>
  )
}

export default Logo