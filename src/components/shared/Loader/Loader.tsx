import styles from "./Loader.module.sass"

interface LoaderProps {
  size?: string
}

export const Loader = ({ size }: LoaderProps) => {
  return (
    <div className={styles[`LoaderWrapper${size ? "_" + size : ""}`]}>
      <div className={styles[`Loader${size ? "_" + size : ""}`]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
