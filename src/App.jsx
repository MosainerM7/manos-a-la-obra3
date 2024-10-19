import { useState } from 'react'
import Titulo from './components/Titulo'
import AddTask from './components/AddTask';
import './App.css'
import TaskContainer from './components/TaskContainer';

function App() {
  
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const handleChange = e => {
    setTask(e.target.value)
  }

  const addTask = e => {
    e.preventDefault()
    if (task.trim() === '') {
      alert("Debes agregar una tarea")
      return;
    }

    const newTask = {
      id: Date.now(),
      task,
      completada: false
    }

    setTasks(prevTasks => [newTask, ...prevTasks]);
    setTask('');
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };


  return (
    <>
       <div className="main_container">
       <Titulo/>   
        <AddTask
        handleChange={handleChange}
        addTask={addTask}
        task={task}>
        </AddTask>

        <div className='div-tareas'>
          {tasks.map((task) => (
            <TaskContainer key={task.id} task={task} deleteTask={deleteTask} />
          ))}

        </div>    
      </div>

  </>
  )
}

export default App
