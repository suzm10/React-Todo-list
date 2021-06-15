import React, {useState} from "react";
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Play",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Play Cricket",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Play Chess",
      isCompleted: false,
    }
  ])
  return (
    <div>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
