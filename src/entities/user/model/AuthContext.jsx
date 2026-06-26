import {createContext, useMemo} from "react";
import useAuth from "@/entities/user/model/useAuth.js";

export const AuthContext = createContext({})

export const AuthProvider = (props) => {
  const {children} = props

  const {
    open,
    isLogin,
    emailAcc,
    passwordAcc,
    isLoggedIn,
    handleOpen,
    handleClose,
    handleToggle,
    handleLogin,
  } = useAuth()

  const value = useMemo(() => ({
    open,
    isLogin,
    isLoggedIn,
    handleOpen,
    handleClose,
    handleToggle,
    handleLogin,
  }), [
    open,
    isLogin,
    isLoggedIn,
    handleOpen,
    handleClose,
    handleToggle,
    handleLogin,
  ])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}