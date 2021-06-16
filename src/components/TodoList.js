import React from 'react'

function TodoList(props) {
    return (
        props.todos.map((todo) => {
            return (
                <div>
                    todo
                </div>
            )
        })
    )
}

export default TodoList

