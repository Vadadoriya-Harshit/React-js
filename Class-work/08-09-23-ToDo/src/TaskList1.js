import React, { useState } from 'react'

function TaskList1({todos , onchangeTodo, ondeleteTodo}) {
  
    return (
    <ul>

        {todos.map((todo)=>(
            <li key={todo.id}>
                <Task
                    todo ={todo}
                    onChange={onchangeTodo}
                    onDelete={ondeleteTodo}
                
                />
            </li>

        ))}

    </ul>
  )
}

function Task({todo, onChange , onDelete})
{
    const [edit,setEdit] = useState(false);
    let content;
    if(edit)
    {
        content = (
            <>
            <input
            value={todo.title}
            onChange={(e)=>{
                onChange({

                    ...todo,
                    title:e.target.value

                })
            }}
            />

            <button onClick={()=>{
                setEdit(false)
            }}>Save</button>

            </>
        )

    }
    else
    {
        content =(
            <>

            {todo.title}
            
            <button onClick={()=>{
                setEdit(true)
            }}>Edit</button>
            </>
        )
    }




    return (
        <>
        {content}
            <button onClick={()=>{onDelete(todo.id)}}>Delete</button>
        
        </>
    )
}




export default TaskList1;
