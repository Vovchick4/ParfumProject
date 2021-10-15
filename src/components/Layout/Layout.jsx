import React, { Suspense, useState } from "react";

import { NavBar, Container, Sidebar } from "..";

// import styles from "./Layout.module.css";

export default function Layout({ children }) {
  const [isActive, setIsActive] = useState(false);

  function openSideBar() {
    setIsActive(true);
  }

  function closeSideBar() {
    setIsActive(false);
  }

  return (
    <React.Fragment>
      <NavBar isActive={isActive} openSideBar={openSideBar} />
      <Sidebar isActive={isActive} closeSideBar={closeSideBar} />

      <Suspense fallback={<h1>LoadIng</h1>}>
        <Container>{children}</Container>
      </Suspense>
    </React.Fragment>
  );
}
