import './Field.scss'
import Input from "@/shared/ui/Input/index.js";
import classNames from "classnames";

const Field = (props) => {
  const {
    className,
    label,
    htmlFor,
    ...inputProps
  } = props

  return (
    <div className={classNames("field", className)}>
      <label
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <Input
        {...inputProps}
      />

    </div>
  )
}

export default Field