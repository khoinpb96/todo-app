import styles from "./Header.module.css";

export default function Header({ darkModeToggle, darkMode }) {
  return (
    <div className={styles.header}>
      <h1>TODO</h1>
      {darkMode ? (
        <div className={styles.moonBtn} onClick={darkModeToggle} />
      ) : (
        <div className={styles.sunBtn} onClick={darkModeToggle} />
      )}
    </div>
  );
}
