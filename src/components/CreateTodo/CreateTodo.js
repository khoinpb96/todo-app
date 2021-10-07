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

  const darkModeForm = (
    <form
      onSubmit={formSubmitHandler}
      className={styles.createTodoContainerDark}
      id="createTodoContainer"
    >
      <div className={styles.markDark} />
      <input
        type="text"
        id="input"
        onChange={inputChangeHandler}
        value={inputVal}
        className={styles.createTodoInputDark}
        placeholder="Create a new todo..."
      />
      <div className={styles.enterBtnDark}></div>
    </form>
  );
  const lightModeForm = (
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
      <div className={styles.enterBtn} onClick={formSubmitHandler}></div>
    </form>
  );
  return darkMode ? darkModeForm : lightModeForm;
}
