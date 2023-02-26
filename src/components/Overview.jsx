
import React from 'react'

export default function Overview(props) {
    const tasksArray = props.tasksArray.tasks;

    const tasks = tasksArray.map(task => {
        console.log(task.editMode)
        if (task.editMode === false) {
            return (
                <div key={task.text} className='task--container'>
                    <p key={task.id}>
                        {`${tasksArray.indexOf(task) + 1}.`} {task.text}
                    </p>
                    <button 
                        onClick={props.onEditBtnClick}
                        id={task.id}
                        className="task--edit-btn">
                            Edit
                    </button>
                    <button 
                        onClick={props.onDeleteBtnClick}
                        id={task.text}
                        className="task--delete-btn">
                        delete
                    </button>
                </div>   
            )
        } else {
            return (
                <div key={task.text} className='task--container'>
                <input 
                    key={task.id} 
                    id={task.id}
                    value={task.text}
                    onChange={props.onTextChange}
                    className="task--input-edit">
                </input>
                <button 
                    onClick={props.onClickReSubmit}
                    id={task.id}
                    className="task--edit-btn">
                        re-submit
                </button>
                <button 
                    onClick={props.onDeleteBtnClick}
                    id={task.text}
                    className="task--delete-btn">
                    delete
                </button>
            </div> 
            )
        }
        
    });

    return (
        <div>
            {tasks}
        </div>
    )
}