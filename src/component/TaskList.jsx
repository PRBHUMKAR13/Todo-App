import React from 'react'
import './TaskList.css'
const TaskList = ({ todoTask, todoDate, deleteItem }) => {
    return (
    <div className="card w-50 my-4">
        <div className="card-body text-left " >
            <div className="card-footer text-muted">
                <h3>{todoDate}</h3>
            </div>
            <h3 className="card-text text-left">{todoTask}</h3>
            <button type="button" className='btn btn-outline-danger px-4 ' onClick={() => deleteItem(todoTask)}>Delete</button>
        </div>
    </div>
    )
}

export default TaskList
