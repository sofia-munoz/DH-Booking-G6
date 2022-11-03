import React from "react"
import { Link } from "react-router-dom"
import styles from "./button.module.css"

/**
 * Botón reutilizable que recibe las siguientes props (se describen acá porque no todos en el equipo usan proptypes)
 *  @prop {string} text: el texto del botón
 * @prop {string} linkTo: el path a donde debe navegar la página en caso de que sea un botón de navegación, prop opcional.
 * @prop {number} margin: margin right del botón en caso de necesitarse , prop opcional.
 * @prop {string} type: submit,button o reset , prop opcional.
 * @prop {string} styling; si es un botón primario, con el fondo blanco, o secundario con el fondo primary
 * @prop {function} onClick: La función que debe ejecutarse cuando se da click al botón en caso de que no sea de navegación, prop opcional.
 * @prop {boolean} navigationButton:En caso de que sea un botón de navegación se debe incluir.
 */

const Button = ({
  text,
  linkTo,
  margin,
  type,
  styling,
  onClick,
  navigationButton,
}) => {
  const styleButton = (style) => {
    switch (style) {
      case style === "primary":
        return styles.primary
      case "secondary":
        return styles.secondary
      default:
        return styles.primary
    }
  }

  return navigationButton ? (
    <Link to={linkTo}>
      <button
        className={`${styles.button} ${
          margin ? styles.buttonRegisterMargin : ""
        } ${styleButton(styling)}`}
        type={type}
      >
        {text}
      </button>
    </Link>
  ) : (
    <button
      className={`${styles.button} ${
        margin ? styles.buttonRegisterMargin : ""
      } ${styleButton(styling)}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
