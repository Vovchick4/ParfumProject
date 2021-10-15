import styles from "./Button.module.css";

import { BiLogInCircle } from "react-icons/bi";

export default function Button({ children, ...buttonProps }) {
  return (
    <div className={styles.content}>
      <button className={styles.button} {...buttonProps}>
        <p className={styles.button_text}>{children}</p>
        <p className={styles.arrow}>
          <BiLogInCircle />
        </p>
      </button>
    </div>
  );
}
