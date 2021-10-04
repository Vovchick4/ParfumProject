import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.content_loader}>
      <div className={styles.lds_heart}>
        <div></div>
      </div>
    </div>
  );
}
