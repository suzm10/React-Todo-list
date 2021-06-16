import React from 'react'
import { useFormik } from 'formik'
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core' 

const Form = () => {
    const formik = useFormik ({
        initialValues: {
            todoText: 'text',
        }
    })

    return (
        <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <TextField label="Todo text..." variant="outlined" name="todoText"/>
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
    )
}

export default Form;