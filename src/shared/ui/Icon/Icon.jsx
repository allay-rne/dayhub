import './Icon.scss'
import classNames from 'classnames'
import SunIcon from '@/shared/assets/icons/sun.svg?react'
import UserIcon from '@/shared/assets/icons/user.svg?react'
import GmailIcon from '@/shared/assets/icons/gmail.svg?react'
import TelegramIcon from '@/shared/assets/icons/telegram.svg?react'
import GithubIcon from '@/shared/assets/icons/github.svg?react'
import CloseIcon from '@/shared/assets/icons/close.svg?react'
import CalendarIcon from '@/shared/assets/icons/calendar.svg?react'
import SearchIcon from '@/shared/assets/icons/search.svg?react'
import TrashIcon from '@/shared/assets/icons/trash.svg?react'
import StatsIcon from '@/shared/assets/icons/stats.svg?react'
import PencilIcon from '@/shared/assets/icons/pencil.svg?react'

const icon = {
  sun: SunIcon,
  user: UserIcon,
  gmail: GmailIcon,
  telegram: TelegramIcon,
  github: GithubIcon,
  close: CloseIcon,
  calendar: CalendarIcon,
  search: SearchIcon,
  trash: TrashIcon,
  stats: StatsIcon,
  pencil: PencilIcon,
}

const Icon = (props) => {
  const {
    className,
    name,
    ariaLabel,
  } = props

  const Component = icon[name]

  if (!Component) return null

  return (
    <span
      className={classNames(className, 'icon')}
      aria-label={ariaLabel}
    >
      <Component />
    </span>
  )
}

export default Icon