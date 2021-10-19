import styles from "./Todo.module.css";

export default function Todo({
  id,
  name,
  deleteTodo,
  toggleTaskCompleted,
  completed,
  darkMode,
  onAllTab,
}) {
  return (
    <div className={!darkMode ? styles.todo : styles.todoDark}>
      <label htmlFor={id}>
        {completed ? (
          <input
            type="checkbox"
            id={id}
            onChange={() => toggleTaskCompleted(id)}
            defaultChecked
          />
        ) : (
          <input
            type="checkbox"
            id={id}
            onChange={() => toggleTaskCompleted(id)}
          />
        )}

        <div className={styles.checkmark} />

        <p>{name}</p>
      </label>

      {onAllTab ? (
        <div className={styles.deleteBtn} onClick={() => deleteTodo(id)} />
      ) : undefined}
    </div>
  );
}
