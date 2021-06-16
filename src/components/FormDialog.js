import React from 'react'
import Form from './Form'
import { Dialog, DialogContent, DialogActions, DialogTitle, 
    TextField, Grid, Button } from '@material-ui/core'

const FormDialog = (props) => {
    return (
        <Dialog open={props.open} onClose={props.handleClose} style={{minWidth: '60vw'}}>
            <DialogTitle>
                Add todo
            </DialogTitle>
            <DialogContent>
                <Form></Form>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>cancel</Button>
                <Button color="primary">add</Button>
            </DialogActions>
        </Dialog>
    )
}

export default FormDialog