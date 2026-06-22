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
    tags,
    error,
    titleTags,
    onInput,
    setTitleTags,
    handleAddTags,
    handleDeleteTag,
    setColor,
    isFavorite,
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
          className={classNames("editor__field field", {"editor__field--error": error})}
          id="note-title"
          placeholder="Write the name..."
          maxLength={20}
          onChange={(event) => onInput(event)}
          value={title}
        />
        {error && <span className="editor__error">{error}</span>}
        <textarea
          className="editor__body-text"
          value={text}
          placeholder="Decorate this place with thoughts..."
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div className="editor__tags">
        <Button
          iconName="plus"
          iconPosition="after"
          mode="transparent"
          isLabelHidden
          label="Add"
          onClick={handleAddTags}
        />
        <Field
          id="note-tag"
          placeholder="add tags..."
          maxLength={10}
          onChange={(event) => setTitleTags(event.target.value)}
          value={titleTags}
        />
        {tags.map((tag) => (
          <span
            className="editor__tag"
            key={tag}
          >
            {tag}
            <Button
              iconName="close"
              iconPosition="after"
              mode="transparent"
              isLabelHidden
              label="Delete"
              onClick={() => handleDeleteTag(tag)}
            />
         </span>
        ))}

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

        <Button
          label="Save your thoughts"
          onClick={handleSave}
        />
      </div>
    </div>
  )
}

export default AddNote