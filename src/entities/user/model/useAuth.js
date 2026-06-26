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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const handleDropdownToggle = useCallback(() => {
    setIsDropdownOpen(prev => !prev)
  }, [])
  const handleLogin = useCallback((email) => {
    setIsLoggedIn(true)
    setOpen(false)
    setIsDropdownOpen(false)
    localStorage.setItem('user', JSON.stringify({ email }))
  }, [])
  const handleLogout = useCallback(()=> {
    localStorage.removeItem('user')
    setIsLoggedIn(false)
  }, [])
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  return {
    user,
    open,
    isLogin,
    isLoggedIn,
    isDropdownOpen,
    handleOpen,
    handleClose,
    handleToggle,
    handleLogin,
    handleDropdownToggle,
    handleLogout,
  }
}

export default useAuth