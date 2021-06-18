import React from 'react';
import {Card, CardContent, Typography, Container, IconButton } from '@material-ui/core/';
//import {Check, Delete} from '@material-ui/icons';
import EditableLabel from 'react-inline-editing'

const ToDo = ({title, crossTask, id, isCompleted, deleteTask}) => {
    const delTask = () => deleteTask(id)
    const markComplete = () => crossTask(id); 
    const todoStyle = isCompleted ? { textDecoration: "line-through"} : {textDecoration: "none"}
	return (
    <div>

        <Container>
            <Card variant="outlined" style={{marginTop: 35, background:"lightgray"}}>
                <CardContent>
                    <Typography variant="h5" component="h2" style={todoStyle}>
                        <IconButton style={{float:"left"}} onClick={markComplete}>
                            Complete Task
                        </IconButton>
                        <EditableLabel text = {title}></EditableLabel>
                        <IconButton style={{float:"right"}} onClick={delTask} >
                            Remove Task
                        </IconButton >
                    </Typography>
                </CardContent>
            </Card>
        </Container>

    </div>
	
	);
};


export default ToDo;