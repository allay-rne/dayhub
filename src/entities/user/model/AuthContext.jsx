import {createContext, useMemo} from "react";
import useAuth from "@/entities/user/model/useAuth.js";

export const AuthContext = createContext({})

export const AuthProvider = (props) => {
  const {children} = props

  const {
    open,
    isLogin,
    handleToggle,
    handleOpen,
    handleClose,
  } = useAuth()

  const value = useMemo(() => ({
    open,
    isLogin,
    handleToggle,
    handleOpen,
    handleClose,
  }), [
    open,
    isLogin,
    handleToggle,
    handleOpen,
    handleClose,
  ])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}