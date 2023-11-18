import {useContext} from 'react'
import TaskContext from './Context/TaskContext'
import {FaTimes} from 'react-icons/fa'

const Task = ({task}) => {
  const {deleteTask,toggleReminder}=useContext(TaskContext);

  return (
    <div className={`task ${task.reminder ? 'remainder': ''}`} onDoubleClick={()=>toggleReminder(task.id)}>
      <h3>{task.text} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=>deleteTask(task.id)}/></h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
