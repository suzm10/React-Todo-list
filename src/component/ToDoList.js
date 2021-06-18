import React from "react";
import ToDo from './ToDo'

const ToDoList = ({todos, crossTask, id, deleteTask}) => {
    return(
        <div>
            {todos.map((todo) =>(
                <ToDo 
                key={todo.id} 
                title={todo.title} 
                crossTask={crossTask} 
                id ={todo.id}
                isCompleted={todo.isCompleted}
                deleteTask = {deleteTask}/>
            ))}
        </div>
    );
};

export default ToDoList;