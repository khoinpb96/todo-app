import { useState } from "react";
import styles from "./CreateTodo.module.css";

export default function CreateTodo({ addTodo, darkMode }) {
  const [inputVal, setInputVal] = useState("");

  function inputChangeHandler(e) {
    setInputVal(e.target.value);
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    inputVal && addTodo(inputVal);
    setInputVal("");
  }

  return (
    <form
      onSubmit={formSubmitHandler}
      className={
        !darkMode ? styles.createTodoContainer : styles.createTodoContainerDark
      }
    >
      <div className={styles.mark} />
      <input
        type="text"
        id="input"
        onChange={inputChangeHandler}
        value={inputVal}
        placeholder="Create a new todo..."
      />
      <div
        className={!darkMode ? styles.enterBtn : styles.enterBtnDark}
        onClick={formSubmitHandler}
      ></div>
    </form>
  );
}
