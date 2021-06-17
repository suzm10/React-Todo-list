import React, {useState} from 'react'
import AgendaForm from './AgendaForm'
import AgendaList from './AgendaList'
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';

function Agenda({agendas, completeAgenda, removeAgenda}) {
    const [editAgendas, setAgendas] = useState({
        id: null,
        value: ""
    })
    
    return agendas.map((agenda, index) => (
        <div className={agenda.isComplete ? 'agenda-row complete' : 'agenda-row'}
        key={index}
        >
            <div key={agenda.id} onClick={() => completeAgenda(agenda.id)}>
                {agenda.text}
            </div>
            
            <div className='icons'>
                <EditIcon
                onClick={() => setAgendas({id: agenda.id, value: agenda.text})}
                className='edit-icon'
                />
                <CloseIcon
                onClick ={() =>removeAgenda(agenda.id)}
                className='delete-icon'
                />
            </div>
        </div>
    ))
}

export default Agenda
