import React from 'react'
import { FormControl, Container, TextField, Button } from '@material-ui/core'
import { Typography } from '@material-ui/core';
import '@fontsource/roboto';

const TodoForm = () => {
    return (
        <Container maxWidth="sm">
            <Typography variant="h3" align="center">Todo List</Typography>
            <form>
                <FormControl fullWidth={true}>
                    <TextField label="I will do this" required={true} />
                    <Button variant="contained" color="primary" style={{ marginTop: 5}} type="submit">Add</Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default TodoForm
