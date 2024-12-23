import React, { useState } from 'react'
import './AddTask.css';
const AddTask = ({addNewItem}) => {
  const [task,setTask]=useState("")
  const [date,setDate]=useState("")

  const newTask=(event)=>{
    setTask(event.target.value)
  }

  const newDate=(event)=>{
    setDate(event.target.value)
  }

  const addTask=()=>{
    addNewItem(task,date)
    setTask("");
    setDate("");
  }

  return (
    <div className="container">
    <div className="row add-taskRow">
        <div className="col-6" >
            <input type="text" placeholder='Enter task' value={task} className="add-taskRow-input" onChange={newTask}/>
        </div>
        <div className="col-2">
            <input type="date" value={date} onChange={newDate}/>
        </div>
        <div className="col-1">
             <button className='btn btn-success btn-sm' onClick={addTask}>Add</button>
        </div>
    </div >
</div>
  )
}

export default AddTask
