import {useCallback, useEffect, useState} from "react";

const useTheme = () => {

  const [toggleTheme, setToggleTheme] = useState(
    JSON.parse(localStorage.getItem('theme') ?? 'false')
  )
  const handleToggleTheme = useCallback(() => {
    setToggleTheme(prev => {
      const newValue = !prev
      localStorage.setItem('theme', JSON.stringify(newValue))
      return newValue
    })
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', toggleTheme ? 'dark' : 'light')
  }, [toggleTheme]);

  return {
    toggleTheme,
    handleToggleTheme,
  }
}

export default useTheme