import React, {useState} from 'react'
import {FormControl, Container, TextField, Button} from '@material-ui/core'


const ToDoForm = ({addTodo}) => {
    const [text,setText] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(text)
        setText("")
    }
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth={true}>
                    <TextField label="I'm planning on doing..." required={true} 
                    value={text} onChange={e => setText(e.target.value)}/>
                    <Button variant="contained" color="secondary" type="submit">Add Task</Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default ToDoForm
