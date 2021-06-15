import React, {useState} from 'react';
import {v4} from 'uuid'
import Header from "./component/header"
import ToDoForm from "./component/ToDoForm"
import ToDoList from './component/ToDoList';
//import ToDo from './component/ToDo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([

  ])

  const addTodo= (text) => {
      const newTodo = {
        id: v4(),
        title: text,
        isCompleted: false,
      }
      setTodos([...todos, newTodo])
  }


  const crossTask = (id) => {
    setTodos(
      todos.map(todo => {
      if(todo.id === id)
      todo.isCompleted =! todo.isCompleted;
      return todo
    }))
  }

  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id != id))
  }


  return (
    <div className="App">
    <Header/>
    <ToDoForm addTodo ={addTodo} />
    <ToDoList todos={todos} 
    crossTask={crossTask}
    deleteTask = {deleteTask}/>
    </div>
  );
}

export default App;
