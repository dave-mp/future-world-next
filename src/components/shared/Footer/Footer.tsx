import styles from "./Footer.module.sass"

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p>
        Future World © • with 💜 by David Mendoza and Platzi •{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}
