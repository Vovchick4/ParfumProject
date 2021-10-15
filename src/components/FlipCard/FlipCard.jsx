import { useState, useEffect, useMemo, Fragment } from "react";
import styles from "./FlipCard.module.css";

export default function FlipCard() {
  const classes = [styles.card];

  const cards = [
    {
      id: 1,
      label: "1",
      active: false,
    },
    {
      id: 2,
      label: "1",
      active: false,
    },
    {
      id: 3,
      label: "3",
      active: false,
    },
    {
      id: 4,
      label: "3",
      active: false,
    },
    {
      id: 5,
      label: "4",
      active: false,
    },
    {
      id: 6,
      label: "4",
      active: false,
    },
    {
      id: 7,
      label: "8",
      active: false,
    },
    {
      id: 8,
      label: "8",
      active: false,
    },
  ];

  return (
    <Fragment>
      {cards.map((item, index) => (
        <button key={item.id} type="button" className={classes.join(" ")}>
          {item.label}
        </button>
      ))}
    </Fragment>
  );
}
