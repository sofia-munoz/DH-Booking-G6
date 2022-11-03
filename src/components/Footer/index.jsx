import React from "react"
import styles from "./footer.module.css"
import SocialMedia from "../SocialMedia"

const Footer = () => {
  return (
    <footer>
      <p className={styles.copyright}>©2022 Digital Booking</p>

      <SocialMedia location="footer" />
    </footer>
  )
}

export default Footer
