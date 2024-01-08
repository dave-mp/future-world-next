import styles from "./ErrorMessage.module.sass"

interface ErrorMessageProps {
  reset: () => void
}

export const ErrorMessage = ({ reset }: ErrorMessageProps) => {
  return (
    <div className={styles.ErrorMessage}>
      <h2>
        <label>{":‘("}</label> Oops! Something went wrong
      </h2>
      <button onClick={reset}>Retry</button>
    </div>
  )
}
