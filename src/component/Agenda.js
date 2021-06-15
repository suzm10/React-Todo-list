import React, {useState} from 'react'
import AgendaForm from './AgendaForm'
import AgendaList from './AgendaList'
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';

function Agenda({agendas, completeAgenda}) {
    const [editAgendas, setAgendas] = useState({
        id: null,
        value: ""
    })

    /*
    <div className ="icons">
                <CloseIcon/>
                <EditIcon/>
            </div>
    */
    return agendas.map((agenda, index) => (
        <div className={agenda.isComplete ? 'agenda-row complete' : 'agenda-row'}
        key={index}
        >
            <div key={agenda.id} onClick={() => completeAgenda(agenda.id)}>
                {agenda.text}
            </div>
            <div className='icons'>
                <EditIcon/>
                <CloseIcon/>
            </div>
        </div>
    ))
}

export default Agenda
