import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, checkTodo, deleteTodo, editTodo }) => {
    return (
        <div>
            {todos.map((todo) => (
                <Todo 
                    key={todo.id} 
                    title={todo.title} 
                    checkTodo={checkTodo} 
                    id={todo.id} 
                    isCompleted={todo.isCompleted} 
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    date={todo.date}
                />
            ))}
        </div>
    )
}

export default TodoList
