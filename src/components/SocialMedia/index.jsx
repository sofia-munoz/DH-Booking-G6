import React from "react"
import SOCIAL_MEDIA from "../../static/socialMedia"
import styles from "./socialMedia.module.css"

const SocialMedia = ({ location }) => {
  return (
    <ul className={`${styles.footerSocial} ${styles.social} `}>
      {SOCIAL_MEDIA.map((social) => (
        <li key={social.ariaLabel}>
          <a
            className={
              location === "footer" ? styles.footerSocial : styles.menuSocial
            }
            href={social.href}
            aria_label={social.ariaLabel}
            target="_blank"
            rel="noreferrer"
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialMedia
