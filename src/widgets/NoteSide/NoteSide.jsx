import './NoteSide.scss'
import classNames from 'classnames'
import Icon from "@/shared/ui/Icon/Icon.jsx";
import flowerImg from '@/shared/assets/image/NotesWidgets/flower.png'
import useNoteSide from "@/entities/notes/model/useNoteSide.js";

const NoteSide = (props) => {
  const {
    notes,
    className,
    onFilterChange,
    activeFilter,
  } = props

  const {
    allNotes,
    favoriteNotes,
    tagsNote,
    trashNote,
  } = useNoteSide(notes)

  const notesFilter = [
    {
      icon: "notes",
      title: "All notes",
      number: allNotes,
      filter: "all",
    },
    {
      icon: "star",
      title: "Favorites",
      number: favoriteNotes,
      filter: "favorites",
    },
    {
      icon: "tags",
      title: "Tags",
      number: tagsNote,
      filter: "tags",
    },
    {
      icon: "trash",
      title: "Trash",
      number: trashNote,
      filter: "trash",
    },
  ]

  return (
    <aside className="notes-filter">
      <ul className="notes-filter__list">
        {notesFilter.map(({icon, title, number, filter}) => (
          <li
            className={classNames(className, "notes-filter__item", {
              'notes-filter__item--isActive': activeFilter === filter
            })}
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
      <div className="notes-filter__motivation hidden-mobile hidden-laptop-s">
        <img
          src={flowerImg}
          alt="motivation"
        />
        <div className="notes-filter__motivation-right">
          <p>Write it down today, thank yourself tomorrow.</p>
          <Icon name="hearth" />
        </div>
      </div>
    </aside>
  )
}

export default NoteSide