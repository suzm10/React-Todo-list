import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { v4 } from 'uuid'
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const [itemEditing, setItemEditing] = useState(null);
  var [editingText, setEditingText] = useState("");
  
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    setCurrentDate(
      month + '/' + date + '/' + year 
      + ' ' + hours + ':' + min + ':' + sec
    );
  }, []);


  const checkTodo = (id) => {
    console.log(id);
    setTodos(todos.map(todo => {
      if(todo.id === id) 
        todo.isCompleted = !todo.isCompleted;
      console.log(todo.isCompleted);
      return todo;
    }))
  }

  
  const editTodo = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id && editingText !== "") {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setItemEditing(null);
    setEditingText("");
  } 


  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const addTodo = (text) => {
    const newTodo = {
      id: v4(),
      title: text,
      isCompleted: false,
      date: currentDate,
    }
    setTodos([...todos, newTodo])
  }

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
