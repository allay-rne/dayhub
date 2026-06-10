import './NoteSide.scss'
import classNames from 'classnames'
import Icon from "@/shared/ui/Icon/Icon.jsx";
import flowerImg from '@/shared/assets/image/flower.png'

const NoteSide = (props) => {
  const {
    onFilterChange,
  } = props

  const notesFilter= [
    {
      icon: "notes",
      title: "All notes",
      number: 6,
      filter: "all",
    },
    {
      icon: "star",
      title: "Favorites",
      number: 2,
      filter: "favorites",
    },
    {
      icon: "tags",
      title: "Tags",
      number: 0,
      filter: "tags",
    },
    {
      icon: "trash",
      title: "Trash",
      number: 0,
      filter: "trash"
    },
  ]

  return (
    <aside className="notes-filter">
      <ul className="notes-filter__list">
        {notesFilter.map(({icon, title, number, filter})=>(
          <li
            className="notes-filter__item"
            key={title}
            onClick={() => onFilterChange(filter)}
          >
            <div className="notes-filter__title">
              <Icon name={icon} />
              {title}
            </div>
            {number}
          </li>
        ))}
      </ul>
      <div className="notes-filter__motivation">
        <img src={flowerImg} alt="motivation" />
        <div className="notes-filter__motivation-right">
          <p>Write it down today, thank yourself tomorrow.</p>
          <Icon name="hearth" />
        </div>
      </div>
    </aside>
  )
}

export default NoteSide