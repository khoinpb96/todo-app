import styles from "./TodoList.module.css";

export default function TodoList({
  data,
  deleteTodo,
  todoSelected,
  filterTodo,
  completingTodo,
}) {
  return (
    <>
      <div className={styles.todoContainer}>
        {data.length > 0 ? (
          data.map((todo, index) => (
            <div className={styles.todo} key={index}>
              <label htmlFor={index}>
                <input type="checkbox" id={index} onClick={completingTodo} />
                <div className={styles.checkmark} />
              </label>
              <p>{todo.name}</p>
              <div
                className={styles.deleteBtn}
                onClick={deleteTodo}
                id={index}
              />
            </div>
          ))
        ) : (
          <div className={styles.todo}>
            <label>
              <input type="checkbox" disabled />
              <div className={styles.checkmark} />
            </label>
            <p style={{ color: `rgba(0,0,0,.5)` }}>What's your plan today?</p>
          </div>
        )}
        <div className={styles.tab}>
          <div>{data.length} items left</div>
          <ul className={styles.tabList}>
            <li
              style={
                todoSelected.all
                  ? { color: "#3A7BFD" }
                  : { color: "rgba(0, 0, 0, 0.3)" }
              }
              onClick={filterTodo.showAllTodo}
            >
              All
            </li>
            <li
              style={
                todoSelected.active
                  ? { color: "#3A7BFD" }
                  : { color: "rgba(0, 0, 0, 0.3)" }
              }
              onClick={filterTodo.showActiveTodo}
            >
              Active
            </li>
            <li
              style={
                todoSelected.completed
                  ? { color: "#3A7BFD" }
                  : { color: "rgba(0, 0, 0, 0.3)" }
              }
              onClick={filterTodo.showCompletedTodo}
            >
              Completed
            </li>
          </ul>
          <div className={styles.clearBtn}>Clear Completed</div>
        </div>
      </div>
      <p style={{ fontSize: "14px", marginTop: 46, color: "rgba(0,0,0,.4)" }}>
        Drag and drop to reoder list
      </p>
    </>
  );
}
