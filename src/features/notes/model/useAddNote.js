import {useCallback, useState} from "react";
import {formatNoteDate} from "@/shared/lib/date.js";


const useAddNote = (onSave, onClose, note) => {

  const [title, setTitle] = useState(note?.title || '')
  const [text, setText] = useState(note?.text || '')
  const [isFavorite, setIsFavorite] = useState(note?.isFavorite || false)
  const [color, setColor] = useState(note?.color || '#a8c5da')
  const [tags, setTags] = useState(note?.tags || [])
  const [titleTags, setTitleTags] = useState('')
  const [error, setError] = useState('')

  const handleFavoriteMark = useCallback(() => {
    setIsFavorite(!isFavorite)
  }, [isFavorite])
  const handleSave = (event) => {
    const clearNewNoteTitle = title.trim()
    const isNewNodeTitleEmpty = clearNewNoteTitle.length === 0

    if (!isNewNodeTitleEmpty) {

      const newNode = {
        id: note ? note.id : Date.now(),
        color: color,
        title: clearNewNoteTitle,
        text: text,
        isFavorite: isFavorite,
        date: formatNoteDate(new Date()),
        tags: tags,
      }

      onSave(newNode)
      onClose()
    } else {
      setError('Complete the field.')
    }
  }
  const handleAddTags = () => {
    const trimmedTag = titleTags.trim()
    const isNewTagsTitleEmpty = trimmedTag.length === 0


    if (!isNewTagsTitleEmpty && tags.length < 3) {
      setTags([trimmedTag, ...tags])
      setTitleTags('')
    } else {
      setError('Please enter a title.')
    }
  }
  const handleDeleteTag = (tagToDelete) => {
    setTags(tags.filter((tag) =>
      tag !== tagToDelete
    ))
  }

  const onInput = (event) => {
    const {value} = event.target
    const clearValue = value.trim()
    const hasOnlySpaces = value.length > 0 && clearValue.length === 0

    setTitle(value)
    setError(hasOnlySpaces ? 'The task cannot be empty' : '')
  }

  return {
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
  }
}


export default useAddNote