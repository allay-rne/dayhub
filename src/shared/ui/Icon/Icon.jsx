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
import FogIcon from '@/shared/assets/icons/fog.svg?react'
import ThunderstormIcon from '@/shared/assets/icons/thunderstorm.svg?react'
import SnowIcon from '@/shared/assets/icons/snow.svg?react'
import CloudNoRainIcon from '@/shared/assets/icons/cloudNoRain.svg?react'
import SunCloudIcon from '@/shared/assets/icons/sunCloud.svg?react'
import NotePageIcon from '@/shared/assets/icons/notePage.svg?react'
import TodoIcon from '@/shared/assets/icons/todo.svg?react'
import VkIcon from '@/shared/assets/icons/vk.svg?react'
import AppleIcon from '@/shared/assets/icons/apple.svg?react'
import PersonCheckIcon from '@/shared/assets/icons/personCheck.svg?react'
import CheckIcon from '@/shared/assets/icons/check.svg?react'
import VisibilityIcon from '@/shared/assets/icons/visibility.svg?react'
import VisibilityOffIcon from '@/shared/assets/icons/visibilityOff.svg?react'
import MoonIcon from '@/shared/assets/icons/moon.svg?react'


const icon = {

  /* header icon */
  sun: SunIcon,
  moon: MoonIcon,
  user: UserIcon,
  personCheck: PersonCheckIcon,
  /* footer icon */
  gmail: GmailIcon,
  telegram: TelegramIcon,
  github: GithubIcon,
  /* home icon */
  todo: TodoIcon,
  notePage: NotePageIcon,
  sunCloud: SunCloudIcon,
  /* todo icon */
  calendar: CalendarIcon,
  stats: StatsIcon,
  pencil: PencilIcon,
  /* notes icon */
  star: StarIvon,
  notes: NotesIcon,
  tags: TagsIcon,
  trash: TrashIcon,
  hearth: HearthIcon,
  arrowBack: ArrowBackIcon,
  /* weather icon */
  cloud: CloudIcon,
  wind: WindIcon,
  navigation: NavigationIcon,
  humidity: HumidityIcon,
  temp: TempIcon,
  fog: FogIcon,
  thunderstorm: ThunderstormIcon,
  snow: SnowIcon,
  cloudNoRain: CloudNoRainIcon,
  /* general icon */
  close: CloseIcon,
  search: SearchIcon,
  plus: PlusIcon,
  vk: VkIcon,
  apple: AppleIcon,
  check: CheckIcon,
  /* auth icon */
  visibility: VisibilityIcon,
  visibilityOff: VisibilityOffIcon,
}

const Icon = (props) => {
  const {
    className,
    name,
    ariaLabel,
    isFavorite,
    style,
  } = props

  const Component = icon[name]

  if (!Component) return null

  return (
    <span
      className={classNames(className, 'icon',
        {'icon--favorite': isFavorite}
      )}
      aria-label={ariaLabel}
      style={style}
    >
      <Component />
    </span>
  )
}

export default Icon