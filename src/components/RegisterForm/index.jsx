import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./registerForm.module.css"
import Button from "../Button"
import {
  FaEyeSlash,
  FaEye,
  FaExclamationCircle,
  FaUserCircle,
} from "react-icons/fa"
import {
  validateEmail,
  validatePassword,
  validatePasswordLength,
} from "../../utils/formValidations"

const initialValues = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
}

export const RegisterForm = () => {
  const [error, setError] = useState()
  const [success, setSuccess] = useState()
  const [passwordShown, setPasswordShown] = useState(false)
  const [formValues, setFormValues] = useState(initialValues)
  const [required, setRequired] = useState(false)
  const navigate = useNavigate()

  /*--------------- Change password input ----------------*/
  const togglePasswordVisiblity = () => {
    setPasswordShown((prevState) => !prevState)
  }

  /*--------------- HANDLERS CHANGES ----------------*/
  const handleValueChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  /*--------------- Show errors  ----------------*/

  const showUserInputsRelatedErrors = () => {
    if (!validateEmail(formValues.email)) {
      setError(
        <>
          <FaExclamationCircle className={styles.warnIcon} />
          <span>Debe utilizar un email válido</span>
        </>
      )
    }
    if (!validatePasswordLength(formValues.password)) {
      setError(
        <>
          <FaExclamationCircle className={styles.warnIcon} />
          <span>La contraseña debe tener mínimo 6 caracteres</span>
        </>
      )
    }
    if (!validatePassword(formValues.password, formValues.confirmPassword)) {
      setError(
        <>
          <FaExclamationCircle className={styles.warnIcon} />
          <span>Las contraseñas no coinciden</span>
        </>
      )
    }
  }

  /*--------------- POST USER ----------------*/
  const registerUser = (e) => {
    e.preventDefault()

    if (
      validateEmail(formValues.email) &&
      validatePassword(formValues.password, formValues.confirmPassword) &&
      validatePasswordLength(formValues.password)
    ) {
      setFormValues(initialValues)
      setRequired(false)
      setLoginInfo(formValues)
      setTimeout(() => {
        navigate("/login")
      }, 1000)
      setError()

      return setSuccess(
        <>
          <FaUserCircle className={styles.warnIcon} />
          <span>Usuario registrado con éxito</span>
        </>
      )
    } else {
      showUserInputsRelatedErrors()
      setRequired(true)
    }
  }

  const insertMessage = (field, formValue) => {
    if (field !== "contraseña" && field !== "confirme su contraseña") {
      return required && !formValue ? (
        <span
          className={styles.requiredFieldText}
        >{`El ${field} es requerido`}</span>
      ) : null
    }
    if (field === "confirme su contraseña") {
      return required && !formValue ? (
        <span
          className={styles.requiredFieldText}
        >{`Confirme su contraseña`}</span>
      ) : null
    } else {
      return required && !formValue ? (
        <span
          className={styles.requiredFieldText}
        >{`La ${field} es requerida`}</span>
      ) : null
    }
  }

  const setLoginInfo = (formValues) => {
    localStorage.setItem("email", formValues.email)
    localStorage.setItem("password", formValues.password)
    localStorage.setItem("name", formValues.name)
    localStorage.setItem("lastname", formValues.lastname)
  }

  return (
    <div className={styles.container}>
      <form className={styles.register_acount} onSubmit={registerUser}>
        <h1 className={styles.heading}>Crear cuenta</h1>

        <div className={styles.caja_name}>
          <div className={styles.div_Container_Labels}>
            <label>Nombre</label>
            <input
              type="text"
              className={styles.input_size_name}
              name="name"
              value={formValues.name}
              onChange={handleValueChange}
              required={required}
            />
            {insertMessage("nombre", formValues.name)}
          </div>

          <div className={styles.margen}>
            <label>Apellido</label>
            <input
              type="text"
              className={styles.input_size_name}
              name="lastname"
              value={formValues.lastname}
              onChange={handleValueChange}
              required={required}
            />
            {insertMessage("apellido", formValues.lastname)}
          </div>
        </div>

        <div className={styles.div_Container_Labels}>
          <label>Correo electronico</label>
          <input
            type="email"
            className={styles.input_size}
            name="email"
            value={formValues.email}
            onChange={handleValueChange}
            required={required}
          />
          {insertMessage("correo electrónico", formValues.email)}
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
          {insertMessage("contraseña", formValues.password)}
        </div>

        <div className={styles.div_Container_Labels}>
          <label>Confirmar contraseña</label>
          <input
            type={passwordShown ? "text" : "password"}
            className={styles.input_size}
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleValueChange}
            required={required}
          />
          <i className={styles.eyeIcon} onClick={togglePasswordVisiblity}>
            {passwordShown ? <FaEyeSlash /> : <FaEye />}
          </i>
          {insertMessage("confirme su contraseña", formValues.password)}
        </div>
        <div>{error ? <p className={styles.errorMsg}>{error}</p> : ""}</div>
        <div>{success ? <p>{success}</p> : ""}</div>
        <Button text="Crear cuenta" styling="secondary" type="submit"></Button>
        <div className={styles.span}>
          <span>Ya tienes cuenta?</span>
          <a href="../.jsx" className={styles.link}>
            Iniciar sesion
          </a>
        </div>
      </form>
    </div>
  )
}
export default RegisterForm
