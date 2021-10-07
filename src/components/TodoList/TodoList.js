import Tab from "./Tab";
import Todo from "./Todo";
import styles from "./TodoList.module.css";

export default function TodoList({
  data,
  deleteTodo,
  toggleTaskCompleted,
  clearCompletedTodo,
  filterTodo,
  darkMode,
}) {
  const fakeTodo = (
    <div className={styles.todo}>
      <label>
        <input type="checkbox" disabled />
        <div className={styles.checkmark} />
      </label>
      <p
        style={
          !darkMode
            ? { color: `rgba(0,0,0,.5)` }
            : { color: `rgba(255,255,255,.5)` }
        }
      >
        What's your plan today?
      </p>
    </div>
  );

  return (
    <div
      className={!darkMode ? styles.todoContainer : styles.todoContainerDark}
      id="todoContainer"
    >
      {data.length > 0
        ? data.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              deleteTodo={deleteTodo}
              toggleTaskCompleted={toggleTaskCompleted}
              completed={todo.completed}
              darkMode={darkMode}
            />
          ))
        : fakeTodo}

      <Tab
        data={data}
        clearCompletedTodo={clearCompletedTodo}
        filterTodo={filterTodo}
        darkMode={darkMode}
      />
    </div>
  );
}
