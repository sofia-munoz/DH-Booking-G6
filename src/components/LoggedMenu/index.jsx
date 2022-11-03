import React from "react"
import { useEffect, useState } from "react"
import styles from "./loggedMenu.module.css"

const storageInitialValues = {
  name: "",
  lastname: "",
}

const LoggedMenu = ({ logged }) => {
  const [storageValues, setStorageValues] = useState(storageInitialValues)

  const capitalize = (str) => {
    return str?.charAt(0).toUpperCase() + str?.slice(1).toLowerCase()
  }

  useEffect(() => {
    setStorageValues({
      name: localStorage.getItem("name"),
      lastname: localStorage.getItem("lastname"),
    })
  }, [])

  const getInitials = (name, lastname) => {
    return name?.charAt(0).toUpperCase() + lastname?.charAt(0).toUpperCase()
  }

  return (
    <div className={`${logged ? styles.loggedInMenu : "hide"}`}>
      <div className={styles.welcomeUser}>
        <div className={styles.userIcon}>
          <span aria-label="Initials name avatar">
            {logged
              ? getInitials(storageValues.name, storageValues.lastname)
              : null}
          </span>
        </div>
        <div className={styles.greeting}>
          <p className={styles.hello}>Hola</p>
          <p className={styles.userName}>
            {`  ${capitalize(storageValues.name)} 
            ${capitalize(storageValues.lastname)}`}
          </p>
        </div>
      </div>
      <h5 className={styles.closeIcon}>X</h5>
    </div>
  )
}

export default LoggedMenu
