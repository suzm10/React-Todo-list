import React from 'react'
import { Grid, Typography, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

function Header({ handleFabClick }) {
    return (
        <Grid container justify="space-between" alignItem="center" style={{marginTop: '2rem'}}>
            <Grid item>
                <Typography variant="h4">
                    Todo List
                </Typography>
            </Grid>
            <Grid>
                <Fab size="medium" color="primary" onClick={handleFabClick}>
                    <AddIcon/>
                </Fab>
            </Grid>
        </Grid>
    );
}

export default Header