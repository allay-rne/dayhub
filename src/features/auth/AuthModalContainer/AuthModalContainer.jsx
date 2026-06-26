import './AuthModalContainer.scss'
import {useContext} from "react";
import {AuthContext} from "@/entities/user/model/AuthContext.jsx";
import LoginForm from "@/features/auth/LoginForm";
import Button from "@/shared/ui/Button/index.js";
import RegisterForm from "@/features/auth/RegisterForm/index.js";

const AuthModalContainer = () => {

  const {open, handleClose, isLogin} = useContext(AuthContext)


  return (
    <>
      {open && (
        <div className="auth-modal-container"
             onClick={handleClose}
        >
          {isLogin ? <h1>Login</h1> : <h1>Register</h1>}
        <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
          <div className="auth-modal-container__theme">
            <p>Light Theme</p>
            <Button />
          </div>
        </div>
      )}
    </>
  )
}

export default AuthModalContainer