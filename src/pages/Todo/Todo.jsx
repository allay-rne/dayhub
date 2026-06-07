import React, { useRef } from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import useTasks from "@/entities/todo/model/useTasks.js";
import TodoItem from "@/entities/todo/ui/TodoItem/index.js";
import TodoSide from "@/widgets/TodoSide/index.js";
import AddTask from "@/features/todo/AddTask/index.js";
import TodoFilter from "@/features/todo/TodoFilter/index.js";
import Hero from "@/shared/ui/Hero/index.js";
import todoBanner from '@/shared/assets/image/Hero/todoLightHero.png'
import "./Todo.scss";


const Todo = () => {
  const {
    tasks,
    searchedTasks,
    handleAddTask,
    handleDeleteTask,
    handleToggleTask,
    handleDeleteAll,
    handleFilterChange,
    handleSearchChange,
    handleEditTask,
  } = useTasks()

  const nodeRefs = useRef({})

  return (
    <div>
      <Hero
       img={todoBanner}
       title="My ToDo list"
       subtitle="Order in affairs is the result in life"
      />
      <div className="todo">
        <div className="todo__main">
          <AddTask
            onAddTask={handleAddTask}
          />
          <TodoFilter
            onFilter={handleFilterChange}
            onSearch={handleSearchChange}
          />
          {tasks.length === 0
            ? <div className='todo__empty'>Not a single task...</div>
            : searchedTasks.length === 0
              ? <div className='todo__empty'>The filter worked too well.</div>
              : <TransitionGroup component="ul" className="todo__list">
                {searchedTasks.map(({ id, title, isDone, date, priority}) => {
                  if (!nodeRefs.current[id]) {
                    nodeRefs.current[id] = React.createRef()
                  }
                  const nodeRef = nodeRefs.current[id]
                  return (
                    <CSSTransition
                      key={id}
                      timeout={300}
                      classNames="todo-item"
                      nodeRef={nodeRef}
                    >
                      <div ref={nodeRef}>
                        <TodoItem
                          id={id}
                          title={title}
                          isDone={isDone}
                          date={date}
                          priority={priority}
                          onDelete={handleDeleteTask}
                          onToggle={handleToggleTask}
                          onEdit={handleEditTask}
                        />
                      </div>
                    </CSSTransition>
                  )
                })}
          </TransitionGroup>
          }
        </div>
        <TodoSide
          onDeleteAll={handleDeleteAll}
          tasks={tasks}
        />
      </div>
    </div>
  )
}

export default Todo