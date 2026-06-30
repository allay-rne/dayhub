import {useCallback, useRef, useState} from "react";

const useBurger = () => {

  const [isActive, setIsActive] = useState(false)
  const handleToggleMenu = useCallback(() => {
    setIsActive(prev => !prev)
  }, [])
  const burgerRef = useRef(null);

  return {
    isActive,
    handleToggleMenu,
    burgerRef,
  }
}

export default useBurger