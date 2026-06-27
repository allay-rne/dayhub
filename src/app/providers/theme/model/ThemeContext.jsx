import {createContext, useMemo} from "react";
import useTheme from "@/app/providers/theme/model/useTheme.js";

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
  const {children} = props

  const {
    toggleTheme,
    handleToggleTheme,
  } = useTheme()

  const value = useMemo(() => ({
    toggleTheme,
    handleToggleTheme,
  }), [
    toggleTheme,
    handleToggleTheme,
  ])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
