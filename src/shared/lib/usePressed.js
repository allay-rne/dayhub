import {useState} from "react";


const usePressed = () => {

  const [isPressed, setIsPressed] = useState(false)

  const handleOnMouseDown = () => {
    setIsPressed(true)
  }
  const handleOnMouseUp = () => {
    setIsPressed(false)
  }

  return {
    isPressed,
    handleOnMouseUp,
    handleOnMouseDown,
  }
}

export default usePressed