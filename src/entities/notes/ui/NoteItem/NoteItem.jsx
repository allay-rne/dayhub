import './NoteItem.scss'
import Button from "@/shared/ui/Button/index.js";
import usePressed from "@/shared/lib/usePressed.js";
import classNames from "classnames";


const NoteItem = (props) => {
  const {
    className,
    id,
    color,
    title,
    text,
    date,
    tags = [],
    isFavorite,
    isDeleted,
    onFullDelete,
    onRestore,
    onToggle,
    onDelete,
    onClick,
  } = props

  const {
    isPressed,
    handleOnMouseUp,
    handleOnMouseDown,
  } = usePressed()


  return (
    <li
      className={classNames(className, "notes-item__item", {
        "notes-item__item--pressed": isPressed
      })}
      onClick={onClick}
      onMouseDown={handleOnMouseDown}
      onMouseUp={handleOnMouseUp}
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
          {isDeleted === true ?
            <Button
              iconName="arrowBack"
              iconPosition="after"
              mode="transparent"
              isLabelHidden
              label="Back"
              onClick={(event) => {
                event.stopPropagation()
                onRestore(id)
              }}
              onMouseDown={(event) => {
                event.stopPropagation()
              }}
            /> : null }

          <Button
            iconName="close"
            iconPosition="after"
            mode="transparent"
            isLabelHidden
            label="Delete"
            onClick={(event) => {
              event.stopPropagation()
              isDeleted === true ? onFullDelete(id) : onDelete(id)
            }}
            onMouseDown={(event) => {
              event.stopPropagation()
            }}
          />
        </div>
      </div>
      <p className="notes-item__text">{text}</p>
      <div className="notes-item__tags">
        {tags.map((tag) => (
          <span
            className="notes-item__tag"
            key={tag}
          >
            {tag}
          </span>
          ))}
      </div>
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
          onMouseDown={(event) => {
            event.stopPropagation()
          }}
        />
      </div>

    </li>
  )
}

export default NoteItem