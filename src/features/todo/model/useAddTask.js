import {useState} from "react";
import {formatDate} from "@/shared/lib/date.js";


const useAddTask = (onAddTask) => {

  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [error, setError] = useState('')
  const [priority, setPriority] = useState('High')
  const [date, setDate] = useState('')

  const handleChoosePriority = (choosePriority) => {
    setPriority(choosePriority)
  }
  const handleChooseDate = (chooseDate) => {
    setDate(chooseDate)
  }
  const handleSubmit = (event) => {
    const clearNewTaskTitle = newTaskTitle.trim()
    const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0

    event.preventDefault()

    if (!isNewTaskTitleEmpty) {

      const newTask= {
        id: Date.now(),
        title: clearNewTaskTitle,
        isDone: false,
        date: formatDate(date),
        priority: priority,
      }

      onAddTask(newTask)

      setNewTaskTitle('')
    }else{
      setError('Please enter a task.')
    }
  }

  const onInput = (event) => {
    const {value} = event.target
    const clearValue = value.trim()
    const hasOnlySpaces = value.length > 0 && clearValue.length === 0

    setNewTaskTitle(value)
    setError(hasOnlySpaces ? 'The task cannot be empty' : '')
  }


  return {
    error,
    newTaskTitle,
    onInput,
    handleChoosePriority,
    handleChooseDate,
    handleSubmit,
  }
}

export default useAddTask