
import React from 'react'

export default function Overview(props) {
    const tasksArray = props.tasksArray.tasks;

    const tasks = tasksArray.map(task => {
        return (
            <div key={task.text} className='task--container'>
                <p key={task.id}>
                    {`${tasksArray.indexOf(task) + 1}.`} {task.text}
                </p>
                <button 
                    onClick={props.onEditBtnClick}
                    id={task.id}
                    className="task--edit-btn">
                    edit
                </button>
                <button 
                    // key={task.buttonId} 
                    onClick={props.onDeleteBtnClick}
                    id={task.text}
                    className="task--delete-btn">
                    delete
                </button>
            </div>   
        )
    });

    return (
        <div>
            {tasks}
        </div>
    )
}