import { CSSTransition } from "react-transition-group";
import styles from "./Dropdown.module.css";
import animation from "../../styles/animations/FadeIn.module.css";

export default function Dropdown({ options, isOpen, onClose }) {
  return (
    <CSSTransition
      classNames={animation}
      timeout={75}
      in={isOpen}
      unmountOnExit
    >
      <div>
        <div onClick={onClose} className={styles.dimmer} />

        <div className={styles.content}>
          {options.map((item) => (
            <button
              key={item.id}
              className={styles.DropdownBTN}
              onClick={item.onClick}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </CSSTransition>
  );
}
