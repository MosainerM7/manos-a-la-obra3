import './styles.css'
import { useState } from 'react'

export default function TaskContainer({ task, deleteTask }) {
    const [completada, setCompletada] = useState(false)

    const handleCheckboxChange = (event) => {
        setCompletada(event.target.checked)
    }
    return (    

    <div className="task_container">
    <div className="task_conteiner_checbox_label">
    <input type="checkbox" className='input_checkbox' 
           id="completar" 
           checked={completada}
           onChange={handleCheckboxChange}/>
     <h3 className={completada ? "completada" : "noCompletada"}>{task.task}</h3>
    </div>
    <button className='input_delete' onClick={() => deleteTask(task.id)}>🗑️</button>    
    </div>
    )
}