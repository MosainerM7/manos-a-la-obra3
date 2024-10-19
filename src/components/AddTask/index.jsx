
import './styles.css'

export default function Add({ handleChange, addTask, task })  {
  
    return (
    
    <div className="add_container" >
    <form onSubmit={addTask} className='form' id='formulario'>
    <input type="text"
           className="input_text_task" 
           onChange={handleChange}   
           value={task}
           />
    <button className='button_add_task' >ADD</button>

    </form>
    </div>
    )
}