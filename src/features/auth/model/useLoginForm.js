import {useCallback, useContext, useState} from "react";
import {AuthContext} from "@/entities/user/model/AuthContext.jsx";

const useLoginForm = () => {

  const { handleToggle, handleLogin } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({email:'', password: ''})
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const handleTogglePassword = useCallback(() => {
    setIsPasswordVisible(prev => !prev)
  }, [])
  const handleSubmit = () => {
    const clearEmail = email.trim()
    const isEmailEmpty = clearEmail.length === 0
    const clearPassword = password.trim()
    const isPasswordEmpty = clearPassword.length === 0


    if (!isEmailEmpty && !isPasswordEmpty) {
      handleLogin(email)
    } else {
      setErrors({
        email: isEmailEmpty ? 'Fill in the field' : '',
        password: isPasswordEmpty ? 'Fill in the field' : '',
      })
    }
  }

  return {
    email,
    password,
    handleToggle,
    isPasswordVisible,
    setEmail,
    setPassword,
    errors,
    handleSubmit,
    handleTogglePassword,
  }
}

export default useLoginForm