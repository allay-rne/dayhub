import {useCallback, useState} from "react";

const useAuth = () => {

  const [open, setOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  const handleOpen = useCallback(() => {
    setOpen(true)
  }, [])
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])
  const handleToggle = useCallback(() => {
    setIsLogin(!isLogin)
  }, [isLogin])

  return {
    open,
    isLogin,
    handleOpen,
    handleClose,
    handleToggle,
  }
}

export default useAuth