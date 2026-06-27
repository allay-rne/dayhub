import {useCallback, useContext, useState} from "react";
import {AuthContext} from "@/entities/user/model/AuthContext.jsx";

const useRegisterForm = () => {

  const {handleToggle, handleLogin} = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({email: '', password: '', confirmPassword: ''})
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const handleTogglePassword = useCallback(() => {
    setIsPasswordVisible(prev => !prev)
  }, [])
  const handleSubmit = () => {
    const clearEmail = email.trim()
    const isEmailEmpty = clearEmail.length === 0
    const clearPassword = password.trim()
    const isPasswordEmpty = clearPassword.length === 0
    const clearConfirmPassword = confirmPassword.trim()
    const isConfirmPasswordEmpty = clearConfirmPassword.length === 0
    const passwordSame = clearPassword === clearConfirmPassword

    if (!isEmailEmpty && !isPasswordEmpty && !isConfirmPasswordEmpty && passwordSame) {
      handleLogin(email)
    } else {
      setErrors({
        email: isEmailEmpty ? 'Fill in the field' : '',
        password: isPasswordEmpty ? 'Fill in the field' : '',
        confirmPassword: isConfirmPasswordEmpty ? 'Fill in the field'
          :  !passwordSame ? 'Passwords do not match...'
            : '',

      })
    }
  }
  const handleEmailChange = (value) => {
    setEmail(value)
    setErrors(prev => ({ ...prev, email: '' }))
  }
  const handlePasswordChange = (value) => {
    setPassword(value)
    setErrors(prev => ({ ...prev, password: '' }))
  }
  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value)
    setErrors(prev => ({ ...prev, confirmPassword: '' }))
  }

  return {
    email,
    password,
    confirmPassword,
    handleToggle,
    isPasswordVisible,
    setEmail,
    setPassword,
    setConfirmPassword,
    errors,
    handleSubmit,
    handleTogglePassword,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
  }
}

export default useRegisterForm