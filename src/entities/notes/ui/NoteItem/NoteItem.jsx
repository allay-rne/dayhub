import './NoteItem.scss'
import Icon from "@/shared/ui/Icon/index.js";
import Button from "@/shared/ui/Button/index.js";


const NoteItem = (props) => {
  const {
    id,
    color,
    title,
    text,
    date,
    isFavorite,
    onToggleFavorite,
  } = props


  return (
    <li
      className="notes-item__item"
    >
      <div className="notes-item__header">
        <div className="notes-item__left">
                  <span
                    className="notes-item__color"
                    style={{backgroundColor: "#a8c5da"}}
                  />
          <h2 className='notes-item__title'>{title}</h2>
        </div>
        <div className="notes-item__actions">
          <Button
            iconName='pencil'
            iconPosition="after"
            mode="transparent"
            isLabelHidden
            label="Edit"
          />
          <Button
            iconName="close"
            iconPosition="after"
            mode="transparent"
            isLabelHidden
            label="Delete"
          />
        </div>
      </div>
      <p className="notes-item__text">{text}</p>
      <div className="notes-item__footer">
        <data>{date}</data>
        <Icon
          name="star"
          isFavorite
        />
      </div>

    </li>
  )
}

export default NoteItem