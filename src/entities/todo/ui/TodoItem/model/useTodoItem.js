import {useCallback, useState} from "react";
import {formatDate} from "@/shared/lib/date.js";

const useTodoItem = (onEdit, id, priority, date) => {

  const [isOpen, setIsOpen] = useState(false)
  const [editValues, setEditValues] = useState({ priority, date })

  const handleOpenEdit  = useCallback(() =>
      setIsOpen(!isOpen)
    , [isOpen])
  const handleSaveEdit  = useCallback(() => {
    onEdit(id, {
      ...editValues,
      date: formatDate(editValues.date)
    })
    setIsOpen(false)
  }, [onEdit, id, editValues])

  return{
    handleOpenEdit,
    handleSaveEdit,
    setEditValues,
    isOpen,
    editValues,
  }
}

export default useTodoItem