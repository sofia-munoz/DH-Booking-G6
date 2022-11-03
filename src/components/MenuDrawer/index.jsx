import React from 'react'
import SocialMedia from '../SocialMedia'
import styles from './menuDrawer.module.css'
import { Link } from "react-router-dom"

export const MenuDrawer = () => {
  return (
    <div>
        <div className={styles.up}>
            <button className={styles.closeIcon}>
             <Link to ="/registrarse">
              X
             </Link>
            </button>
            <h1 className={styles.menu}>MENU</h1>
        </div>

        <div className={styles.down}>
          <Link to="/sesion">
            <p className={styles.p}>Iniciar sesion</p>
          </Link>
          
          <Link to="/registrarse">
            <p className={styles.p}>Registarse</p>
          </Link>
        </div>

        <div className={styles.down}>
          <SocialMedia/>
        </div>
    </div>
  )
}
export default MenuDrawer