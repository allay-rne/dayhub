import './AuthModalContainer.scss'
import {useContext} from "react";
import {AuthContext} from "@/entities/user/model/AuthContext.jsx";
import LoginForm from "@/features/auth/LoginForm";
import RegisterForm from "@/features/auth/RegisterForm/index.js";
import ThemeButton from "@/app/providers/theme/ThemeButton/index.js";

const AuthModalContainer = () => {

  const {open, handleClose, isLogin} = useContext(AuthContext)


  return (
    <>
      {open && (
        <div
          className="auth-modal-container"
          onClick={handleClose}
        >
          {isLogin ? <h2>Login</h2> : <h2>Register</h2>}
        <div
          className="auth-modal"
          onClick={(e) =>
            e.stopPropagation()}>
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
          <div
            className="auth-modal-container__theme"
            onClick={(e) => e.stopPropagation()}
          >
            <ThemeButton />
          </div>
        </div>
      )}
    </>
  )
}

export default AuthModalContainer