import React from 'react'
import { Card, CardContent, Container, Typography, IconButton } from '@material-ui/core'
import { Check, Delete } from '@material-ui/icons'

const Todo = ({ title }) => {
    return (
        <div>
            <Container>
                <Card variant="outlined" style={{ marginTop: 35, background: "lightgray" }}>
                    <CardContent>
                    {/* Check Icon */}
                        <Typography variant="h5" component="h2">
                            <IconButton>
                                <Check style={{ color: "green" }}/>
                            </IconButton>
                            {title}
                            <IconButton style={{ float: "right" }}>
                                <Delete style={{ color: "red" }}/>
                            </IconButton>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

export default Todo
