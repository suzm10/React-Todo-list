import React, { useState } from 'react'
import { FormControl, Container, TextField, Button } from '@material-ui/core'
import { Typography } from '@material-ui/core';

const TodoForm = ({ addTodo }) => {
    let texts = [];

    const [text, setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!texts.includes(text)) {
            addTodo(text);
            setText("");
            texts.push(text);
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h3" align="center" style={{ color: "#0C0B13" }}>Todo List</Typography>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth={true}>
                    <TextField required={true} 
                    value={text} onChange={(e) => setText(e.target.value)} data-testid="new-item-input"/>
                    <Button variant="contained" color="primary" style={{ marginTop: 5}} type="submit" data-testid="new-item-button">Add</Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default TodoForm
