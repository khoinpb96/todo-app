import styles from "./Header.module.css";

export default function Header({ darkModeToggle, darkMode }) {
  return (
    <div className={styles.header}>
      <h1>TODO</h1>
      <div
        className={!darkMode ? styles.moonBtn : styles.sunBtn}
        onClick={darkModeToggle}
      />
    </div>
  );
}
