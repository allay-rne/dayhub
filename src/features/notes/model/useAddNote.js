import {useCallback, useState} from "react";
import {formatNoteDate} from "@/shared/lib/date.js";


  const useAddNote = (onSave, onClose, note) => {
  const [title, setTitle] = useState(note?.title || '')
  const [text, setText] = useState(note?.text || '')
  const [isFavorite, setIsFavorite] = useState(note?.isFavorite || false)
  const [color, setColor] = useState(note?.color || '#a8c5da')


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
        date: formatNoteDate(new Date())
      }

      onSave(newNode)
      onClose()
    }
  }

  return {
    title,
    text,
    color,
    setColor,
    isFavorite,
    setTitle,
    setText,
    handleFavoriteMark,
    handleSave,
  }
}


export default useAddNote