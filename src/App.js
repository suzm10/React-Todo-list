import React, {useState} from "react";
import './App.css';
import Form from "./component/Form";
import ToDoList from "./component/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setToDos] = useState([]);
  return (
    <div className="App">
      <header>
       <h1>To Do List</h1>
      </header>
      <Form inputText = {inputText} todos = {todos} setToDos={setToDos} setInputText={setInputText}/>
      <ToDoList setToDos={setToDos} todos ={todos} />
    </div>
  );
}

export default App;



