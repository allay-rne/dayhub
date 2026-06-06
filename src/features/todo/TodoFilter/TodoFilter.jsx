import './TodoFilter.scss'
import Field from "@/shared/ui/Field/index.js";
import Button from "@/shared/ui/Button/index.js";

const TodoFilter = (props) => {
  const {
    onFilter,
    onSearch,
  } = props

  return (

    <div className="todo-filter">
      <Field
        className="todo-filter__field field"
        // label
        htmlFor="todo-filter"
        id="todo-filter"
        placeholder="Search task..."
        autoComplete="off"
        type="search"
        onChange={(event) => onSearch(event.target.value)}
      />

      <div className="todo-filter__button">
        <Button
          label="All"
          mode="filter"
          onClick={() => onFilter('all')}
        />
        <Button
          label="High"
          mode="filter"
          onClick={() => onFilter('high')}
        />
        <Button
          label="Medium"
          mode="filter"
          onClick={() => onFilter('medium')}
        />
        <Button
          label="Low"
          mode="filter"
          onClick={() => onFilter('low')}
        />
      </div>
    </div>
  )
}

export default TodoFilter