import { nanoid } from "nanoid";
import { useState } from "react";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import Header from "./components/Header/Header";
import Instruction from "./components/Instruction/Instruction";
import TodoList from "./components/TodoList/TodoList";
import Container from "./components/UI/Container";

export default function App() {
  const [todoData, setTodoData] = useState(() => {
    return JSON.parse(localStorage.getItem("data")) || [];
  });

  const [completedFilter, setCompletedFilter] = useState(false);
  const unchangeableTodoData = JSON.parse(localStorage.getItem("data"));
  const [darkMode, setDarkMode] = useState(false);
  const [onAllTab, setOnAllTab] = useState(true);

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
      setOnAllTab(false);
    }
    if (e.target.value === "active") {
      const updateData = unchangeableTodoData.filter((todo) => !todo.completed);
      setTodoData(updateData);
      setOnAllTab(false);
    }
    if (e.target.value === "all") {
      setTodoData(unchangeableTodoData);
      setOnAllTab(true);
    }
  }

  function darkModeToggle() {
    setDarkMode((prev) => !prev);
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
        onAllTab={onAllTab}
      />
      <Instruction darkMode={darkMode} />
    </Container>
  );
}
