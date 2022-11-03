import React, { useState } from "react"
import styles from "./loginForm.module.css"
import Button from "./../Button"
import { FaEyeSlash, FaEye } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { FaExclamationCircle } from "react-icons/fa"

const initialValues = {
  email: "",
  password: "",
}

export const LoginForm = () => {
  const [formValues, setFormValues] = useState(initialValues)
  const [required, setRequired] = useState(false)
  const [passwordShown, setPasswordShown] = useState(false)
  const [error, setError] = useState()
  const togglePasswordVisiblity = () => {
    setPasswordShown((prevState) => !prevState)
  }
  const navigate = useNavigate()

  const handleValueChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const verifyCredentials = () => {
    const validation =
      localStorage.getItem("email") === formValues.email &&
      localStorage.getItem("password") === formValues.password

    return validation
  }

  const loginUser = (e) => {
    e.preventDefault()
    setRequired(true)

    const validation = verifyCredentials()

    if (validation) {
      navigate("/")
    } else {
      setError(
        <>
          <FaExclamationCircle className={styles.warnIcon} />
          <span>
            Por favor vuelva a intentarlo, sus credenciales son inválidas
          </span>
        </>
      )
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.login_acount} onSubmit={loginUser}>
        <h1 className={styles.heading}>Iniciar sesion</h1>
        <div>
          <div className={styles.div_Container_Labels}>
            <label>Correo electronico</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              className={styles.input_size}
              required={required}
              onChange={handleValueChange}
            />
          </div>
          <div className={styles.div_Container_Labels}>
            <label>Contraseña</label>
            <input
              type={passwordShown ? "text" : "password"}
              className={styles.input_size}
              name="password"
              value={formValues.password}
              onChange={handleValueChange}
              required={required}
            />
            <i className={styles.eyeIcon} onClick={togglePasswordVisiblity}>
              {passwordShown ? <FaEyeSlash /> : <FaEye />}
            </i>
          </div>
        </div>
        <div>{error ? <p className={styles.errorMsg}>{error}</p> : ""}</div>
        <Button text="Ingresar" styling="secondary"></Button>

        <div className={styles.span}>
          <span>Aun no tienes cuenta? </span>
          <a href="./RegisterForm/index.jsx" className={styles.link}>
            Registrate
          </a>
        </div>
      </form>
    </div>
  )
}
export default LoginForm
