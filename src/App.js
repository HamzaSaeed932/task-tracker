import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { TaskProvider } from "./components/Context/TaskContext";
import {useContext} from 'react'
import TaskContext from './components/Context/TaskContext'

function App() {
  
  const {tasks,setShowAddTask,showAddTask}=useContext(TaskContext);
  return (
    <TaskProvider>
      <div className="container">
        <Header
          onShow={() => {
            setShowAddTask(!showAddTask);
          }}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask />}
        {tasks.length > 0 ? (
          <Tasks/>
        ) : (
         <p>No Tasks to Show</p>
        )}
      </div>
    </TaskProvider>
  );
}

export default App;
