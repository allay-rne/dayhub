import './AuthModalContainer.scss'
import {useContext} from "react";
import {AuthContext} from "@/entities/user/model/AuthContext.jsx";
import LoginForm from "@/features/auth/LoginForm";
import Button from "@/shared/ui/Button/index.js";

const AuthModalContainer = () => {

  const {open, handleClose} = useContext(AuthContext)


  return (
    <>
      {open && (
        <div className="auth-modal-container"
             onClick={handleClose}
        >
        <h1>Login</h1>
        <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <LoginForm />
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