import './TodoSide.scss'
import Button from "@/shared/ui/Button/index.js";
import Icon from "@/shared/ui/Icon/Icon.jsx";
import TodoItem from "@/entities/todo/ui/TodoItem/index.js";
import useTodoSide from "@/entities/todo/model/useTodoSide.js";

const TodoSide = (props) => {
  const {
    onDeleteAll,
    tasks,
  } = props

  const {
    result,
    displayTasks,
    isCalendarOpen,
    statsItem,
    setSelectedDate,
    handleToggleButton,
  } = useTodoSide(tasks)

  return (
    <aside className="side">

      <div className="side-stats">

        <div className="side-stats__header">
          <h3 className="side-stats__heading">Overview</h3>
          <Icon
            name="stats"
          />
        </div>

        <div className="side-stats__body">
          <div className="side-stats__progres">
            <div
              className="side-stats__round"
              style={{
                background: `conic-gradient(var(--color-primary) ${result}%, var(--color-border) ${result}%)`
              }}
            >
              <span className="side-stats__percent">{Math.round(result)}%</span>
              <span className="side-stats__label">completed</span>
            </div>
          </div>

          <ul className="side-stats__menu-list">
            {statsItem.map(({title, count, color}) => (
              <li
                className="side-stats__menu-item"
                key={title}
              >
                <span
                  className="side-stats__count"
                  style={{backgroundColor: color}}
                />
                <span className="side-stats__title">{title}</span>
                <span className="side-stats__count-number">{count}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          className="side-trash__button"
          iconName="trash"
          iconPosition="before"
          label="Delete All"
          mode="danger"
          onClick={onDeleteAll}
        />
      </div>

      <div className="side-calendar">
        <div className="side-calendar__header">
          <h3 className="side-calendar__heading">Today</h3>
          <Icon
            name="calendar"
          />
        </div>

        <div className="side-calendar__body">
          {displayTasks.length === 0
            ?
            <p className='side-calendar__empty'>The tasks were frightened and did not come...</p>
            : <ul className="side-calendar__list">
              {displayTasks.map(({id, title, isDone, priority}) => (
                <TodoItem
                  key={id}
                  title={title}
                  isDone={isDone}
                  isCompact
                  priority={priority}
                />
              ))}
            </ul>
          }
        </div>
        <Button
          className="side-calendar__button"
          iconName="calendar"
          iconPosition="before"
          label="View Calendar"
          onClick={handleToggleButton}
        />

        {isCalendarOpen &&
          <input
            className="side-calendar__date"
            type="date"
            onChange={(event) =>
              setSelectedDate(event.target.value)}
          />}
      </div>
    </aside>
  )
}

export default TodoSide