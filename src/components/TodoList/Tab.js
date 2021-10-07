import { useState } from "react";
import styles from "./Tab.module.css";

export default function Tab({
  data,
  clearCompletedTodo,
  filterTodo,
  darkMode,
}) {
  return !darkMode ? (
    <div className={styles.tab}>
      <div>
        {data.length ? `${data.length} items left` : `${data.length} item left`}
      </div>

      <form className={styles.tabList}>
        <label htmlFor="all">
          <input
            type="radio"
            name="todoFilter"
            id="all"
            value="all"
            onChange={filterTodo}
            defaultChecked
          />
          <p>All</p>
        </label>
        <label htmlFor="active">
          <input
            type="radio"
            name="todoFilter"
            id="active"
            value="active"
            onChange={filterTodo}
          />
          <p>Active</p>
        </label>
        <label htmlFor="completed">
          <input
            type="radio"
            name="todoFilter"
            id="completed"
            value="completed"
            onChange={filterTodo}
          />
          <p>Completed</p>
        </label>
      </form>

      <div className={styles.clearBtn} onClick={clearCompletedTodo}>
        Clear Completed
      </div>
    </div>
  ) : (
    <div className={styles.tabDark}>
      <div>
        {data.length ? `${data.length} items left` : `${data.length} item left`}
      </div>

      <form className={styles.tabList}>
        <label htmlFor="all">
          <input
            type="radio"
            name="todoFilter"
            id="all"
            value="all"
            onChange={filterTodo}
            defaultChecked
          />
          <p>All</p>
        </label>
        <label htmlFor="active">
          <input
            type="radio"
            name="todoFilter"
            id="active"
            value="active"
            onChange={filterTodo}
          />
          <p>Active</p>
        </label>
        <label htmlFor="completed">
          <input
            type="radio"
            name="todoFilter"
            id="completed"
            value="completed"
            onChange={filterTodo}
          />
          <p>Completed</p>
        </label>
      </form>

      <div className={styles.clearBtn} onClick={clearCompletedTodo}>
        Clear Completed
      </div>
    </div>
  );
}
