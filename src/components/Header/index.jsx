import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import styles from "./header.module.css"
import { FaBars } from "react-icons/fa"
import Button from "../Button"
import LoggedMenu from "../LoggedMenu"

const Header = ({ logged, page }) => {
  return (
    <header>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Logo de Digital Booking" />
        </Link>
        <span className={styles.slogan}>Sentite como en tu hogar</span>
      </div>
      <button className={styles.menu}>
        <Link to="/menuDrawer">
          <FaBars className={styles.hamburguerMenu} />
        </Link>
      </button>
      <div className={`${logged ? "hide" : styles.buttonsContainer}`}>
        {page !== "/register" ? (
          <Button
            text="Crear cuenta"
            linkTo="/register"
            margin
            navigationButton
          />
        ) : null}

        {page !== "/login" ? (
          <Button text="Iniciar sesión" linkTo="/login" navigationButton />
        ) : null}
      </div>
      <LoggedMenu logged={logged} />
    </header>
  )
}

export default Header
