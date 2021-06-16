import React from 'react'
import { Chip, Grid, Paper, Typography } from '@material-ui/core'

function TodoList(props) {
    return (
        <Grid container direction="column" spacing={2}  style={{marginTop: '1.2rem'}}>
            {
                props.todos.map((todo) => {
                    return (
                        <Grid item>
                            <Paper style={{padding: '0.8rem'}} elevation={3}>
                                <Grid container alignItem="center" justify="space-between">
                                    <Grid item>
                                        <Typography variant="h6">
                                            {todo.val}
                                        </Typography>
                                    </Grid>
                                    <Grid>
                                        <Chip color="primary" label={todo.date} size="small" variant="outlined"/>
                                        <Chip color="primary" label={todo.time} size="small" variant="outlined"/>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default TodoList

