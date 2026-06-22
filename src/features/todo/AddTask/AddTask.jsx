import './AddTask.scss'
import Button from "@/shared/ui/Button/index.js";
import Field from "@/shared/ui/Field/index.js";
import classNames from "classnames";
import useAddTask from "@/features/todo/model/useAddTask.js";


const AddTask = (props) => {
  const {
    onAddTask,
  } = props

  const {
    error,
    newTaskTitle,
    onInput,
    handleChoosePriority,
    handleChooseDate,
    handleSubmit,
  } = useAddTask(onAddTask)

  return (
    <form
      className="add-task"
      onSubmit={handleSubmit}
    >
      <Field
        className={classNames("add-task__field field", {"add-task__field--error": error})}
        htmlFor="new-task"
        id="new-task"
        placeholder="Add a new task..."
        autoComplete="off"
        value={newTaskTitle}
        onChange={(event) => onInput(event)}
      />
      {error && <span className="add-task__error">{error}</span>}
      <select
        className="add-task__select"
        onChange={(event) => handleChoosePriority(event.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <input
        type="date"
        className="add-task__date"
        onChange={(event) => handleChooseDate(event.target.value)}
      />
      <Button
        label="Add Task"
        type="submit"
      />
    </form>
  )
}

export default AddTask