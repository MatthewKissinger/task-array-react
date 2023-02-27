
import React from 'react'

export default function Overview(props) {

    const { taskData, tasksArray } = props;

            return (
                <div className='task--container'>
                    <p>
                        {`${tasksArray.indexOf(taskData) + 1}.`} {taskData.text}
                    </p>
                    <button 
                        onClick={props.onEditBtnClick}
                        className="task--edit-btn">
                            Edit
                    </button>
                    <button 
                        onClick={props.onDeleteBtnClick}
                        className="task--delete-btn">
                        delete
                    </button>
                </div>   
            )
}