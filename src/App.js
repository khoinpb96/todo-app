import CreateTodo from "./components/CreateTodo/CreateTodo";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import Container from "./components/UI/Container";
import { useState } from "react";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [todoSelected, setTodoSelected] = useState({
    all: true,
  });
  const [completedTodo, setCompletedTodo] = useState(false);

  function addTodo(newTodo) {
    setTodoData((prev) => [...prev, newTodo]);
  }

  function deleteTodo(chosenTodo) {
    setTodoData((prev) =>
      prev.filter((e, index) => index !== +chosenTodo.target.id)
    );
  }

  function completingTodo(event) {
    setCompletedTodo(true);
    const a = todoData.find((e, i) => i === +event.target.id);
    // if (checked)
    a.completed = true;
    console.log(a);
    console.log(event.target.id);
  }

  const filterTodo = {
    showAllTodo() {
      setTodoSelected({ all: true });
    },
    showActiveTodo() {
      setTodoSelected({ active: true });
    },
    showCompletedTodo() {
      setTodoSelected({ completed: true });
    },
  };

  return (
    <Container>
      <Header />
      <CreateTodo addTodo={addTodo} />
      <TodoList
        data={todoData}
        deleteTodo={deleteTodo}
        todoSelected={todoSelected}
        filterTodo={filterTodo}
        completingTodo={completingTodo}
      />
    </Container>
  );
}
