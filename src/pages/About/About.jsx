import styles from "./About.module.css";

import { Slider } from "../../components";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 style={{ color: "white", fontSize: "90px", marginRight: 100 }}>
        THE <br /> NIGHT TREASURE
      </h1>
      <Slider />
    </div>
  );
}
