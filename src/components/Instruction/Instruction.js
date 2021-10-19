import styles from "./Instruction.module.css";

export default function Instruction({ darkMode }) {
  return (
    <p className={!darkMode ? styles.ins : styles.insDark}>
      Drag and drop to reoder list
    </p>
  );
}
