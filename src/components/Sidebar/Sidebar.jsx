import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

import { authSelectors } from "../../redux/auth";

import styles from "./Sidebar.module.css";
import SlideSideBar from "../../styles/animations/SlideSideBar.module.css";
import FadeIn from "../../styles/animations/FadeIn.module.css";

import { BiUser } from "react-icons/bi";

export default function Sidebar({ isActive, closeSideBar }) {
  const user = useSelector(authSelectors.getUser);

  return (
    <div>
      <CSSTransition
        classNames={FadeIn}
        in={isActive}
        unmountOnExit
        timeout={75}
      >
        <div className={styles.dimmer} onClick={closeSideBar} />
      </CSSTransition>

      <CSSTransition
        classNames={SlideSideBar}
        in={isActive}
        unmountOnExit
        timeout={75}
      >
        <div className={styles.content_active}>
          <div className={styles.content_text}>
            <div className={styles.logo}>Basnik</div>
            <div className={styles.links}>Links</div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
