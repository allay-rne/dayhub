import Button from "@/shared/ui/Button/index.js";
import Field from "@/shared/ui/Field/index.js";
import './AddNote.scss'
import useAddNote from "@/features/notes/model/useAddNote.js";
import classNames from "classnames";


const AddNote = (props) => {
  const {
    note,
    onClose,
    onSave,
  } = props

  const {
    title,
    text,
    color,
    setColor,
    isFavorite,
    setTitle,
    setText,
    handleFavoriteMark,
    handleSave,
  } = useAddNote(onSave, onClose, note)

  return (
    <div className="editor">
      <div className="editor__header">
        <div className="editor__colors">
          {['#a8c5da', '#d4a5a5', '#b5c9a8', '#e8d5a8', '#c5b8d4', '#d4bfa8'].map((hex) => (
            <span
              key={hex}
              className={classNames("editor__color-option", {
                "editor__color-option--active": color === hex
              })}
              style={{backgroundColor: hex}}
              onClick={() => setColor(hex)}
            />
          ))}
        </div>
        <Button
          iconName="close"
          iconPosition="after"
          mode="transparent"
          isLabelHidden
          label="Delete"
          onClick={onClose}
        />
      </div>
      <div className="editor__body">
        <Field
          id="note-title"
          placeholder="Write the name..."
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <textarea
          className="editor__body-text"
          value={text}
          placeholder="Decorate this place with thoughts..."
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div className="editor__footer">
        <Button
          iconName="star"
          iconPosition="after"
          isFavorite={isFavorite}
          isLabelHidden
          mode="transparent"
          label="Favorite"
          onClick={handleFavoriteMark}
        />
        <div className="editor__footer-formating">
          Тут строка формата текста
        </div>
        <Button
          label="Save your thoughts"
          onClick={handleSave}
        />
      </div>
    </div>
  )
}

export default AddNote