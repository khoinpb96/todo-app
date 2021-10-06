import { useState } from "react";
import styles from "./CreateTodo.module.css";

export default function CreateTodo({ addTodo }) {
  const [inputVal, setInputVal] = useState("");

  function inputChangeHandler(e) {
    setInputVal(e.target.value);
  }
  function formSubmitHandler(e) {
    e.preventDefault();
    inputVal &&
      addTodo({
        name: inputVal,
        completed: false,
      });
  }
  return (
    <form onSubmit={formSubmitHandler} className={styles.createTodoContainer}>
      <div className={styles.mark} />
      <input
        type="text"
        id="input"
        onChange={inputChangeHandler}
        value={inputVal}
        className={styles.createTodoInput}
        placeholder="Create a new todo..."
      />
    </form>
  );
}
