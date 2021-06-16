import React from 'react'
import { useState } from 'react';
import { Container, CssBaseline } from '@material-ui/core'
import Header from './components/Header'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([
    {
      val: 'todo 1',
      'date': '15th june'
    },
    {
      val: 'todo 2',
      'date': '16th june'
    },
    {
      val: 'todo 3',
      'date': '17th june'
    },
    {
      val: 'todo 1',
      'date': '16th june'
    }
  ])
  
  function App() {
    return (
      <>
        <CssBaseline/>
        <Container>
          <Header/>
          <TodoList todos={todos}/>
        </Container>
      </>
    );
  }
}


export default App;
