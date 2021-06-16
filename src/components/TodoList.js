import React from 'react'
import { Chip, Grid, Paper, Typography, ButtonGroup, Button, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import CheckIcon from '@material-ui/icons/Check'

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
                                <ButtonGroup color="primary" aria-label="outlined primary button group" 
                                    variant="text" size="small" style={{paddingTop:'8px'}}>
                                    <IconButton>
                                        <DeleteIcon/>
                                    </IconButton>
                                    <IconButton>
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton>
                                        <CheckIcon/>
                                    </IconButton>
                                </ButtonGroup>
                            </Paper>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default TodoList

