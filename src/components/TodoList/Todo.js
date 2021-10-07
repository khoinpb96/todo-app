import styles from "./Todo.module.css";

export default function Todo({
  id,
  name,
  deleteTodo,
  toggleTaskCompleted,
  completed,
  darkMode,
}) {
  return !darkMode ? (
    <div className={styles.todo}>
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
      <div className={styles.deleteBtn} onClick={() => deleteTodo(id)} />
    </div>
  ) : (
    <div className={styles.todoDark}>
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
      <div className={styles.deleteBtn} onClick={() => deleteTodo(id)} />
    </div>
  );
}
