import './NoteItem.scss'
import Button from "@/shared/ui/Button/index.js";


const NoteItem = (props) => {
  const {
    id,
    color,
    title,
    text,
    date,
    isFavorite,
    onToggle,
    onDelete,
    onClick,
  } = props


  return (
    <li
      className="notes-item__item"
      onClick={onClick}
    >
      <div className="notes-item__header">
        <div className="notes-item__left">
                  <span
                    className="notes-item__color"
                    style={{backgroundColor: color}}
                  />
          <h2 className='notes-item__title'>{title}</h2>
        </div>
        <div className="notes-item__actions">
          <Button
            iconName="close"
            iconPosition="after"
            mode="transparent"
            isLabelHidden
            label="Delete"
            onClick={(event) => {
              event.stopPropagation()
              onDelete(id)
            }}
          />
        </div>
      </div>
      <p className="notes-item__text">{text}</p>
      <div className="notes-item__footer">
        <data>{date}</data>
        <Button
          iconName="star"
          iconPosition="after"
          isFavorite={isFavorite}
          mode="transparent"
          isLabelHidden
          label="Favorite"
          onClick={(event) => {
            event.stopPropagation()
            onToggle(id)
          }}
        />
      </div>

    </li>
  )
}

export default NoteItem