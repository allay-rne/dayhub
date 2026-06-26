import './UserDropdown.scss'
import Button from "@/shared/ui/Button/index.js";
import {useContext, useState} from "react";
import {AuthContext} from "@/entities/user/model/AuthContext.jsx";

const UserDropdown = () => {

  const {user, handleLogout} = useContext(AuthContext)

  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(user.email)

  const handleSave = () => {
    localStorage.setItem('user', JSON.stringify({...user, name}))
    setIsEditing(false)
  }

  return (
    <div className="user-dropdown">
      <div className="user-dropdown__name">
        {isEditing
          ? <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          : <p>{name}</p>
        }
        {isEditing ? (
          <div className="user-dropdown__actions">
            <Button
              iconName="check"
              iconPosition="before"
              isLabelHidden
              label="Сохранить"
              onClick={handleSave}
            />
            <Button
              iconName="close"
              iconPosition="before"
              isLabelHidden
              label="Отмена"
              onClick={() => {
              setName(user.email)
              setIsEditing(false)
            }}
            />
          </div>
        ) : (
          <Button
            className="user-dropdown__rename-btn"
            label="Сменить имя"
            mode="filter"
            onClick={() => setIsEditing(true)}
          />
        )}
      </div>
      <Button
        className="user-dropdown__exit-btn"
        label="Exit"
        mode="danger"
        onClick={handleLogout}
      />
    </div>
  )
}

export default UserDropdown