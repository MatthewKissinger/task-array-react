
import React from 'react'
import uniqid from "uniqid"
import './App.css'
import Overview from './components/Overview'

// TODO 
// style with bootcamp for learning purposes

function App() {

  const [tasksArray, setTasksArray] = React.useState(
    {
      task: {
        text: '', 
        id: uniqid(),
        editMode: false
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
          editMode: false
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
              editMode: false
            } 
          ],
          task: {
            text: '',
            id: uniqid(),
            editMode: false
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
            editMode: false
          },
          tasks: prevState.tasks.filter(task => task.text !== title) 
      }
      }  
    )
  }

  function editTaskMode(e) {
    const targetId = e.target.id;
    const targetIndex = tasksArray.tasks.findIndex(task => task.id === targetId);

    function updateEditModeTrue(targetIndex) {
      const newArray = tasksArray.tasks.map((task, i) => {
        if (targetIndex === i) {
          return {...task, editMode: true};
        } else {
          return task;
        }
      })
      return newArray;
    }

    const newArray = updateEditModeTrue(targetIndex);

    setTasksArray(
      {
        task: {
          text: '', 
          id: uniqid(),
          editMode: false
        },
        tasks: newArray
      }
    )   
  }

  function submitEdit(e) {
    console.log('submit changes to task text')
    // const targetIndex = tasksArray.tasks.findIndex(task => task.id === e.target.id);
    
    // function updateTaskText(index) {
    //   const newArray = tasksArray.tasks.map((task, i) => {
    //     if (targetIndex === i) {
    //       return {...task, 
    //             text: '',
    //             editMode: false};
    //     } else {
    //       return task;
    //     }
    //   })
    //   return newArray;
    // }
  }

  function editFieldTextChange(e) {
    console.log(e.target.id)
  }

  return (
    <div className="App--container">
      <input 
        className='newTaskName' 
        type="text" 
        value={tasksArray.task.text}
        onChange={handleChange}>
      </input>
      <button onClick={addNewTask}
        className='add-task-btn'>
        Add Task
      </button>
      <Overview 
        tasksArray={tasksArray} 
        onDeleteBtnClick={deleteTask}
        onEditBtnClick={editTaskMode}
        onTextChange={editFieldTextChange}
        onClickReSubmit={submitEdit}/>
    </div>
  )
}

export default App;
