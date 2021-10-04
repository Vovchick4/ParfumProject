import styles from "./Home.module.css";
import { StepFrom } from "../../components";
import StepFormContextProvaider from "../../context/StepFormContext";

export default function Home() {
  return (
    <StepFormContextProvaider>
      <div className={styles.title}>
        <StepFrom />
      </div>
    </StepFormContextProvaider>
  );
}
