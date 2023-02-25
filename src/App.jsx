
import React from 'react'
import uniqid from "uniqid"
import './App.css'
import Overview from './components/Overview'

// TODO 
// upload to github
// style with bootcamp for learning purposes

function App() {

  const [tasksArray, setTasksArray] = React.useState(
    {
      task: {
        text: '', 
        id: uniqid(),
        buttonId: uniqid(),
        editId: uniqid()
      },
      tasks: []
    } 
  );

  function handleChange(e) {
    setTasksArray(prevState => {
      return ({
        ...prevState,
        task: {
          text: e.target.value,
          id: prevState.task.id,
          buttonId: prevState.task.buttonId
        }
      })
    })
  }

  function addNewTask() {
    setTasksArray(prevState => {
      return (
        {
          tasks: [...prevState.tasks,
            {
              text: prevState.task.text,
              id: prevState.task.id,
              buttonId: prevState.task.buttonId
            } 
          ],
          task: {
            text: '',
            id: uniqid(),
            buttonId: uniqid()
          }
        }
      )
    })
  }

  function deleteTask(e) {
    const title = e.target.id;
    
    setTasksArray(prevState => {
      return {
          task: {
            text: '', 
            id: uniqid(),
            buttonId: uniqid()
          },
          tasks: prevState.tasks.filter(task => task.text !== title) 
      }
      }  
    )
  }

  function editTask(e) {
    console.log(e.target.id);
  }

  return (
    <div className="App--container">
      <input 
        className='newTaskName' 
        type="text" 
        onChange={handleChange} 
        value={tasksArray.task.text}>
      </input>
      <button onClick={addNewTask}
        className='add-task-btn'>
        Add Task
      </button>
      <Overview 
        tasksArray={tasksArray} 
        onDeleteBtnClick={deleteTask}
        onEditBtnClick={editTask}/>
    </div>
  )
}

export default App;
