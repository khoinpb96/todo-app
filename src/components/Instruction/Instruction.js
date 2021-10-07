import styles from "./Instruction.module.css";

export default function Instruction({ darkMode }) {
  return !darkMode ? (
    <p className={styles.ins}>Drag and drop to reoder list</p>
  ) : (
    <p className={styles.insDark}>Drag and drop to reoder list</p>
  );
}
