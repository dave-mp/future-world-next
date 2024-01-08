"use client"

import Image from "next/image"
import styles from "app/sass/global-error.module.sass"

export default function GloablError({ reset }: ErrorPageProps) {
  return (
    <main className={styles.Error}>
      <h1 className={styles.Error__title}>Oops!</h1>
      <Image src="/images/error.png" width={500} height={500} alt="Error" />
      <p className={styles.Error__message}>Something went wrong</p>
      <button className={styles.Error__button} onClick={reset}>
        Retry
      </button>
    </main>
  )
}
