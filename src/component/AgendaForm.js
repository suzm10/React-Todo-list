import SelectInput from '@material-ui/core/Select/SelectInput';
import React, {useState} from 'react'

function AgendaForm(props) {
    const [input, userInput] = useState('')
    /*This prevents default actions.
    Like my page kept refreshing after hitting the submit button. This prevents that
    and This is being used in the <form><form/> (AgendaForm.js)*/
    const postSubmit = submission => {
        submission.preventDefault();

        props.onSubmit({
            /*This generates a random id for the submission out of 10000. I found this line on StackOverflow.*/
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        /*This resets the submit. Your string will become empty again after you click submit.*/
        userInput('');
    };

    const handleTheChanges = submission =>{
        userInput(submission.target.value)
    }

    
    return (
        /*This is a form request for the user to input the any text or value.*/
        <form className="agenda-form" onSubmit ={postSubmit}>
            <input type='text' placeholder="Add an Agenda" value={input} name="text" className='agenda-input' onChange={handleTheChanges}/>
            <button className="agenda-button">Add Agenda</button>
        </form>
    );
}

export default AgendaForm
