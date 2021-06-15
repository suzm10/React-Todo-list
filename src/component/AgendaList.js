import React, {useState} from 'react'
import AgendaForm from './AgendaForm'
import Agenda from './Agenda'

function AgendaList() {
    const[agendas, setupAgendas] = useState([])

    const addAgenda = agenda => {
        if(!agenda.text || /^\s*$/.test(agenda.text)){
            return
        }
        const newAgendas = [agenda, ...agendas]
        console.log(agenda, ...agendas)

        setupAgendas(newAgendas)
    }

    const completeAgenda = id =>{
        let updatedAgendas = agendas.map(agenda => {
            if (agenda.id === id) {
                agenda.isComplete = !agenda.isComplete
            }
            return agenda
        })
        setupAgendas(updatedAgendas);
    }


    return (
        <div>
            <h1>What are your Agendas for today?</h1>
            <AgendaForm onSubmit={addAgenda}/>
            <Agenda 
            agendas={agendas}
            completeAgenda={completeAgenda}
            />
        </div>
    )
}

export default AgendaList
