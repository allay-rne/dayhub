import './TodoItem.scss'
import Button from "@/shared/ui/Button/index.js";
import classNames from "classnames";
import useTodoItem from "@/entities/todo/ui/TodoItem/model/useTodoItem.js";

const TodoItem = (props) => {
  const {
    id,
    title,
    isDone,
    date,
    priority,
    isCompact,
    onDelete,
    onToggle,
    onEdit,
  } = props

  const {
    handleOpenEdit,
    handleSaveEdit,
    setEditValues,
    isOpen,
    editValues,
  } = useTodoItem(onEdit, id, priority, date)

  return (
      <li className={classNames("todo__item todo-item",{
        ['todo-item--done']: isDone
      })}>
        <input
          className="todo-item__checkbox"
          id={id}
          type="checkbox"
          checked ={isDone}
          onChange={() => onToggle(id)}
        />

        <label
          className="todo-item__label"
          htmlFor={id}
        >
          {title}
        </label>

        {!isCompact && !isOpen && <span
          className="todo-item__date"
        >
          {date}
        </span>}

        {!isOpen && <span
          className={classNames("todo-item__priority", {
            [`todo-item__priority--${priority.toLowerCase()}`]: priority
          })}
        >
          {priority}
        </span>}

        {isOpen && <>
          <input
            type="date"
            className="add-task__date"
            onChange={(event) => setEditValues({...editValues, date: event.target.value})}
          />
          <select
            className="add-task__select"
            onChange={(event) => setEditValues({...editValues, priority: event.target.value})}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <Button
            label="Save"
            onClick={handleSaveEdit}
            mode="filter"
          />
        </>
        }

        {!isCompact && <Button
          iconName='pencil'
          iconPosition="after"
          mode="transparent"
          isLabelHidden
          label="Edit"
          onClick={handleOpenEdit}
        />}

        {!isCompact && <Button
          iconName="close"
          iconPosition="after"
          mode="transparent"
          isLabelHidden
          label="Delete"
          onClick={() => onDelete(id)}
        />}


      </li>

  )
}

export default TodoItem