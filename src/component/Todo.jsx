import React, { useState } from 'react'
import AppTitle from './AppTitle'
import AddTask from './AddTask'
import TaskList from './TaskList'
import Messaage from './Messaage'
import './Todo.css'

const Todo = () => {
   
    const [tasks,setTask]=useState([])

    const handleAdd=(task,inputdate)=>{
        const newTask=[...tasks,{
            name:task,date:inputdate
        }]
        setTask(newTask)
    }   

    const deleteItem=(Itemname)=>{
        const newTask=tasks.filter((item)=>{ return item.name!==Itemname})
        setTask(newTask)
        console.log("Delete Item:",{Itemname})
    }

    return (
        <>
            <AppTitle/>
            <center>
            <AddTask addNewItem={handleAdd}/>
            {tasks.length===0?<Messaage/>:""}
            {tasks.map((item,index) =>( <TaskList key={index} todoTask={item.name} todoDate={item.date} deleteItem={deleteItem}/>  
            ))}
            </center>
        </>
    )
}

export default Todo

