import './Field.scss'
import Input from "@/shared/ui/Input/index.js";
import classNames from "classnames";

const Field = (props) => {
  const {
    className,
    label,
    htmlFor,
    children,
    ...inputProps
  } = props

  return (
    <div className={classNames("field", className)}>
      <label
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <div className="field__input-wrap">
        <Input
          {...inputProps}
        />
        {children}
      </div>
    </div>
  )
}

export default Field