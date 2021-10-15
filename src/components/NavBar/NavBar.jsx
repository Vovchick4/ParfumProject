import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";

import { Button, Container, Dropdown } from "..";
import { DarkModeContext } from "../../context/DarkModeContext";

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

const valutes = {
  grivn: {
    name: "grivna",
    valuta: "grivn",
  },
  euro: {
    name: "Euro",
    valuta: "Є",
  },
  dolar: {
    name: "Dolars",
    valuta: "$",
  },
};

export default function NavBar({ isActive, openSideBar }) {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [valuta, setValuta] = useState(valutes.grivn);

  const location = useLocation();

  const { mode, setMode } = useContext(DarkModeContext);

  function openDropDown() {
    setIsOpenDropDown(true);
  }

  function onCloseDropDown() {
    setIsOpenDropDown(false);
  }

  function name() {
    setMode(!mode);
    localStorage.setItem("DarkMode", mode);
  }

  return (
    <Container>
      <header className={!mode ? styles.header_darkMode : styles.header}>
        <button type="button" onClick={name}>
          isDarkMode
        </button>
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

        <div className={styles.containerDropdown}>
          <Button onClick={openDropDown}>
            {valuta.name}
            {valuta.valuta}
          </Button>
          <Dropdown
            isOpen={isOpenDropDown}
            onClose={onCloseDropDown}
            options={[
              {
                id: 1,
                onClick: () => setValuta(valutes.grivn),
                label: valutes.grivn.name,
              },
              {
                id: 2,
                onClick: () => setValuta(valutes.euro),
                label: valutes.euro.name,
              },
              {
                id: 3,
                onClick: () => setValuta(valutes.dolar),
                label: valutes.dolar.name,
              },
            ]}
          />
        </div>

        <p>
          {valuta.name === valutes.dolar.name ? 2000 / 28 : "2000"}
          {valuta.name}
        </p>

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
