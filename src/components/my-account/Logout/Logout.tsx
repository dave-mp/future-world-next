"use client"

import { handleLogout } from "app/actions"
import styles from "./Logout.module.sass"

export const Logout = () => {
  const handleSubmit = async () => {
    await handleLogout()
  }
  return (
    <div className={styles.Logout}>
      <button onClick={handleSubmit}>Logout</button>
    </div>
  )
}
