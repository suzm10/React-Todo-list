import React from 'react'
import { Dialog, DialogContent, DialogActions, DialogTitle, 
    TextField, Grid, Button } from '@material-ui/core'

const FormDialog = (props) => {
    return (
        <Dialog open={props.open} onClose={props.handleClose} style={{minWidth: '60vw'}}>
            <DialogTitle>
                Add todo
            </DialogTitle>
            <DialogContent>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <TextField label="Todo text..." variant="outlined"/>
                    </Grid>
                    {/* <FormControl> */}
                    <Grid item>
                        <TextField label="Date" type="date" 
                            variant="outlined" style={{ width: '100%' }}
                            InputLabelProps={{ shrink:true, }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField label="Time" type="time" 
                            variant="outlined" style={{ width: '100%' }}
                            InputLabelProps={{ shrink:true, }}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button color="primary">add</Button>
                <Button onClick={props.handleClose}>cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default FormDialog