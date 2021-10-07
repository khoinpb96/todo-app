import CreateTodo from "./components/CreateTodo/CreateTodo";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import Container from "./components/UI/Container";
import Instruction from "./components/Instruction/Instruction";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [todoData, setTodoData] = useState(() => {
    return JSON.parse(localStorage.getItem("data")) || [];
  });
  const [completedFilter, setCompletedFilter] = useState(false);
  const unchangeableTodoData = JSON.parse(localStorage.getItem("data"));
  const [darkMode, setDarkMode] = useState(false);

  function addTodo(name) {
    const newTodo = {
      id: nanoid(),
      name: name,
      completed: false,
    };
    setTodoData((prev) => {
      localStorage.setItem("data", JSON.stringify([...prev, newTodo]));
      return [...prev, newTodo];
    });
  }

  function deleteTodo(id) {
    const updateData = todoData.filter((todo) => todo.id !== id);
    setTodoData(() => {
      localStorage.setItem("data", JSON.stringify(updateData));
      return updateData;
    });
  }

  function toggleTaskCompleted(id) {
    const updateData = todoData.map((todo) => {
      if (id === todo.id) return { ...todo, completed: !todo.completed };
      return todo;
    });
    console.log(completedFilter);
    setTodoData(() => {
      localStorage.setItem("data", JSON.stringify(updateData));
      return updateData;
    });
  }

  function clearCompletedTodo() {
    const updateData = todoData.filter((todo) => !todo.completed);
    setTodoData(() => {
      localStorage.setItem("data", JSON.stringify(updateData));
      return updateData;
    });
  }

  function filterTodo(e) {
    if (e.target.value === "completed") {
      const updateData = unchangeableTodoData.filter((todo) => todo.completed);
      updateData.length > 0 && setTodoData(updateData);
      setCompletedFilter(true);
    }
    if (e.target.value === "active") {
      const updateData = unchangeableTodoData.filter((todo) => !todo.completed);
      setTodoData(updateData);
    }
    if (e.target.value === "all") {
      setTodoData(unchangeableTodoData);
    }
  }

  function darkModeToggle() {
    !darkMode ? setDarkMode(true) : setDarkMode(false);
    document.querySelector("body").classList.toggle("darkMode");
  }

  return (
    <Container>
      <Header darkModeToggle={darkModeToggle} darkMode={darkMode} />
      <CreateTodo addTodo={addTodo} darkMode={darkMode} />
      <TodoList
        data={todoData}
        deleteTodo={deleteTodo}
        toggleTaskCompleted={toggleTaskCompleted}
        clearCompletedTodo={clearCompletedTodo}
        filterTodo={filterTodo}
        darkMode={darkMode}
      />
      <Instruction darkMode={darkMode} />
    </Container>
  );
}
