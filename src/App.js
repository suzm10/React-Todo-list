import React from 'react'
import { useState } from 'react';
import { Container, CssBaseline } from '@material-ui/core'
import Header from './components/Header'
import TodoList from './components/TodoList'
import FormDialog from './components/FormDialog'

  
function App() {

  const [todos, setTodos] = useState([
    {
      val: 'todo 1',
      'date': '15th june',
      'time': '10:30'
    },
    {
      val: 'todo 2',
      'date': '16th june',
      'time': '5:00'
    },
    {
      val: 'todo 3',
      'date': '17th june',
      'time': '11:59'
    },
    {
      val: 'todo 1',
      'date': '16th june',
      'time': '12:00'
    }
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleFabClick = () => {
    console.log('click');
  }

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  }
  
  return (
    <>
      <CssBaseline/>
      <Container>
        <Header
          handleFabClick={handleDialogOpen}
        />
        <TodoList todos={todos}/>
      </Container>
      <FormDialog
        open={isDialogOpen}
        handleClose={handleDialogClose}
      />
    </>
  );
}



export default App;
