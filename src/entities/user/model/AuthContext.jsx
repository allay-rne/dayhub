import {createContext, useMemo} from "react";
import useAuth from "@/entities/user/model/useAuth.js";

export const AuthContext = createContext({})

export const AuthProvider = (props) => {
  const {children} = props

  const {
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
  } = useAuth()

  const value = useMemo(() => ({
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
  }), [
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
  ])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}