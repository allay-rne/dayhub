import {createContext, useMemo} from "react";
import useAuth from "@/entities/user/model/useAuth.js";

export const AuthContext = createContext({})

export const AuthProvider = (props) => {
  const { children } = props

  const {
    open,
    handleOpen,
    handleClose,
  } = useAuth()

const value = useMemo(() => ({
  open,
  handleOpen,
  handleClose,
}),[
    open,
    handleOpen,
    handleClose,
  ])

return (
  <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
)
}