import {useCallback, useEffect, useMemo, useState} from "react";


const useTasks = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])
  const [filter, setFilter] = useState('all')
  const [searchTasks, setSearchTasks] = useState('')

  const handleAddTask = useCallback((newTask) => {
    setTasks([newTask, ...tasks])
  }, [tasks])
  const handleDeleteTask = useCallback((id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }, [tasks])
  const handleToggleTask = useCallback((id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, isDone: !task.isDone} : task))
  }, [tasks])
  const handleEditTask = useCallback((id, {priority, date}) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, priority, date} : task))
  }, [tasks])
  const handleDeleteAll = useCallback(() => {
    const result = confirm('Are you shure?')
    if (result){
      setTasks([])
    }
  }, [])
  const handleFilterChange = useCallback((priority) => {
    setFilter(priority)
  }, [])
  const handleSearchChange = useCallback((search) => {
    setSearchTasks(search)
  },[])

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) =>
      filter === 'all' ? true
        : task.priority.toLowerCase() === filter)
  }, [tasks, filter])

  const searchedTasks = useMemo(() => {
    return filteredTasks.filter((task) =>
      task.title.toLowerCase()
        .includes(searchTasks.trim().toLowerCase())
    )
  }, [searchTasks, filteredTasks])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

  return {
    tasks,
    searchedTasks,
    handleAddTask,
    handleDeleteTask,
    handleToggleTask,
    handleEditTask,
    handleDeleteAll,
    handleFilterChange,
    handleSearchChange,
  }
}

export default useTasks