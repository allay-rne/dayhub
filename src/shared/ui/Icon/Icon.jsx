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
import StarIvon from '@/shared/assets/icons/star.svg?react'
import NotesIcon from '@/shared/assets/icons/notes.svg?react'
import TagsIcon from '@/shared/assets/icons/tags.svg?react'
import HearthIcon from '@/shared/assets/icons/hearth.svg?react'
import PlusIcon from '@/shared/assets/icons/plus.svg?react'
import ArrowBackIcon from '@/shared/assets/icons/arrowBack.svg?react'
import CloudIcon from '@/shared/assets/icons/cloud.svg?react'
import WindIcon from '@/shared/assets/icons/wind.svg?react'
import NavigationIcon from '@/shared/assets/icons/navigation.svg?react'
import HumidityIcon from '@/shared/assets/icons/humidity.svg?react'
import TempIcon from '@/shared/assets/icons/temp.svg?react'


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
  star: StarIvon,
  notes: NotesIcon,
  tags: TagsIcon,
  hearth: HearthIcon,
  plus: PlusIcon,
  arrowBack: ArrowBackIcon,
  cloud: CloudIcon,
  wind: WindIcon,
  navigation: NavigationIcon,
  humidity: HumidityIcon,
  temp: TempIcon,

}

const Icon = (props) => {
  const {
    className,
    name,
    ariaLabel,
    isFavorite,
  } = props

  const Component = icon[name]

  if (!Component) return null

  return (
    <span
      className={classNames(className, 'icon',
        {'icon--favorite': isFavorite}
      )}
      aria-label={ariaLabel}
    >
      <Component />
    </span>
  )
}

export default Icon