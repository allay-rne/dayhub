import {useState} from "react";

const useTodoSide = (tasks) => {
  const [selectedDate, setSelectedDate] = useState('')
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  const handleToggleButton = () => {
    setIsCalendarOpen(!isCalendarOpen)
  }

  const today = new Date()
    .toLocaleDateString('en-US', {month: 'short', day: 'numeric'})

  const completedCount = tasks.filter((task) => task.isDone === true).length
  const pendingCount = tasks.filter((task) => !task.isDone).length
  const todayTasks = tasks.filter((task) => task.date === today)
  const overdueCount = tasks.filter((task) => new Date(task.date + ' ' + new Date().getFullYear())
    < new Date(new Date().toDateString())
    && !task.isDone).length

  const result = tasks.length === 0
    ? 0 : completedCount * 100 / tasks.length
  const displayTasks = selectedDate
    ? tasks.filter((task) =>
      task.date === new Date(selectedDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      }))
    : todayTasks

  const statsItem = [
    {
      color: 'var(--color-success)',
      title: 'Completed',
      count: completedCount,
    },

    {
      color: 'var(--color-warning)',
      title: 'Pending',
      count: pendingCount,
    },

    {
      color: 'var(--color-danger)',
      title: 'Overdue',
      count: overdueCount,
    },
  ]

  return {
    pendingCount,
    overdueCount,
    result,
    displayTasks,
    selectedDate,
    isCalendarOpen,
    completedCount,
    statsItem,
    setSelectedDate,
    handleToggleButton,
  }
}

export default useTodoSide