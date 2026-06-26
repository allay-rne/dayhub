import {useCallback, useState} from "react";

const useAuth = () => {

  const [open, setOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem('user')
  )

  const handleOpen = useCallback(() => {
    setOpen(true)
  }, [])
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])
  const handleToggle = useCallback(() => {
    setIsLogin(!isLogin)
  }, [isLogin])
  const handleLogin = useCallback((email) => {
    setIsLoggedIn(true)
    setOpen(false)
    localStorage.setItem('user', JSON.stringify({ email }))
  }, [])

  return {
    open,
    isLogin,
    isLoggedIn,
    handleOpen,
    handleClose,
    handleToggle,
    handleLogin,
  }
}

export default useAuth