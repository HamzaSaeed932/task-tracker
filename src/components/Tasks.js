import Task from "./Task"
import { useContext } from "react"
import TaskContext from './Context/TaskContext'
const Tasks = () => {  

  const {tasks,deleteTask,toggleRemainder}=useContext(TaskContext);
  return (
    <>
      {tasks.map((task)=>(
        <Task key={task.id} task={task} />
      ))}
    </>
  )
}

export default Tasks
