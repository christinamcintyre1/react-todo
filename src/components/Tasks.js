import { useState } from 'react'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
   return (
        <>
    {tasks.map((tasks) => (
    <Task 
    key={tasks.id} 
    tasks={tasks} 
    onDelete={onDelete} 
    onToggle={onToggle}
    />
    ))}
    </>
   )
};

export default Tasks;

