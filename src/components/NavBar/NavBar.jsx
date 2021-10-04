import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";

import { Container } from "..";
import {
  DarkModeContext,
  useLocalStorageState,
} from "../../context/DarkModeContext";

import styles from "./NavBar.module.css";

import urls from "../../config/urls";

import { CgMathEqual } from "react-icons/cg";

const links = [
  {
    label: "about",
    to: urls.about,
    exact: true,
  },
  {
    label: "incredients",
    to: urls.incredients,
    exact: true,
  },
  {
    label: "product",
    to: urls.product,
    exact: true,
  },
  {
    label: "contact",
    to: urls.contact,
    exact: true,
  },
];

export default function NavBar({ isActive, openSideBar }) {
  const location = useLocation();

  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container>
      <header className={"darkMode" ? styles.header_darkMode : styles.header}>
        <div>
          <NavLink
            className={
              urls.home === location.pathname
                ? styles.navLinkLogoActiveClassName
                : styles.logo
            }
            to={urls.home}
          >
            Basnik.
          </NavLink>
        </div>
        <nav>
          {links.map((item) => (
            <NavLink
              className={styles.navlinks}
              activeClassName={styles.navlinksActiveClassName}
              key={item.to}
              {...item}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div
          className={!isActive ? styles.hamburger : null}
          onClick={openSideBar}
        >
          {!isActive && <CgMathEqual fontSize="30" />}
        </div>
      </header>
    </Container>
  );
}
