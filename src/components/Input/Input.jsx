import styles from "./Input.module.css";

export default function Input({ id, children, error, ...inputProps }) {
  return (
    <div className={styles.content_input}>
      <label htmlFor={id}>
        <p className={styles.label}>{children}</p>
        <input
          className={error ? styles.input_error : styles.input}
          name={id}
          {...inputProps}
        />
      </label>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
