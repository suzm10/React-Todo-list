import React from 'react'
/* import { useState } from 'react' */
import { Card, CardContent, Container, Typography, IconButton, Chip } from '@material-ui/core'
import { Check, Delete } from '@material-ui/icons'
import EditableLabel from 'react-inline-editing'


const Todo = ({ title, checkTodo, id, isCompleted, deleteTodo, date }) => {
    /* const currentDate = date */
    const markComplete = () => checkTodo(id)
    const delTodo = () => deleteTodo(id)
    /* const editing = () => editTodo(id) */
    const todoStyle = isCompleted 
        ? { textDecoration:"line-through" } 
        : { textDecoration: "none" };
    /* const [edit, setEdit] = useState(false); */
    return (
        // {edit ? <div/> : }
        <div>
            <Container>
                <Card variant="outlined" style={{ marginTop: 35, background: "#ECECEC" }}>
                    <CardContent>
                            <IconButton onClick={markComplete}>
                                <Check style={{ color: "#28CC2D" }}/>
                            </IconButton>
                            <Typography align='center' variant="h5" component="h2" style={todoStyle} spacing={5}>
                            <EditableLabel text = {title} inputWidth='200px' 
                                inputHeight='25px'></EditableLabel>
                            </Typography>
                            <Chip label={date} style={{ color: "#3581D8" }}/>
                            {/* <IconButton style={{ float: "right" }}>
                                <Edit style={{ color: "#FFE135" }} onClick={editTodo}/>
                            </IconButton> */}
                            <IconButton style={{ float: "right" }} onClick={delTodo}>
                                <Delete style={{ color: "#D82E3F" }}/>
                            </IconButton>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

export default Todo
