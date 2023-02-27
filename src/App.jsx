
import React from 'react'
import uniqid from "uniqid"
import './App.css'
import Overview from './components/Overview'

// TODO 
// come back for HARD challenge later


function App() {
  // set up state for input field
  const [taskInput, setTaskInput] = React.useState(
    {
      text: '',
      id: uniqid(),
      editMode: false
    }
  )

  // set up state for taskArray storage
  const [tasksArray, setTasksArray] = React.useState([]);

  function handleChange(e) {
    setTaskInput(prevState => {
      return (
        {
          text: e.target.value,
          id: prevState.id,
          editMode: false
        }
      )
    })
  }

  function addNewTask() {
    setTasksArray(prevState => {
      return (
        [...prevState,
            {
              text: taskInput.text,
              id: taskInput.id,
              editMode: false
            } 
        ]
      )
    })

    setTaskInput({
      text: '',
      id: uniqid(),
      editMode: false
    })
  }

  function deleteTask(id) {

    const newArray = tasksArray.filter(task => task.id !== id);
    
    setTasksArray(newArray);
  }

  const tasks = tasksArray.map(task => {
    return (
      <Overview
        key={task.id}
        id={task.id}
        tasksArray={tasksArray}
        taskInput={taskInput}
        taskData={task} 
        onDeleteBtnClick={() => deleteTask(task.id)}
      />
    )
  })


  return (
    <div className="App--container">
      <input 
        className='newTaskName' 
        type="text" 
        value={taskInput.text}
        onChange={handleChange}>
      </input>
      <button onClick={addNewTask}
        className='add-task-btn'>
        Add Task
      </button>
      {tasks}
    </div>
  )
}

export default App;
