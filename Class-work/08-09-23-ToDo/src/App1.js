import React, { useState } from 'react';
import AddTodo1 from './AddTodo1';
import TaskList1 from './TaskList1';


let nextId = 3;
const intialTodo = [
    {id:0,title:"Milk"},
    {id:1,title:"Bread"},
    {id:2,title:"Toast"},
]


function App1() {

    const [todo,setTodo] = useState(intialTodo);

    function handleAddTodo(title)
    {
        setTodo([
            ...todo,
            {
                id:nextId++,//3++
                title:title
            }
        ])

    }

    function handleChangeTodo(nextTodo)
    {
        setTodo(todo.map((t)=>{
            if(t.id == nextTodo.id )
            {
                return nextTodo;
            }
            else 
            {
                return t;
            }

        }))

    }


    function handleDeleteTodo(todoId)
    {
        setTodo(todo.map((t)=>{
            return t.id != todoId;

        }))

    }


    



  return (
    <div>
        <AddTodo1 onAddTodo={handleAddTodo}/>
        <TaskList1
        todos={todo}
        onchangeTodo ={handleChangeTodo}
        ondeleteTodo ={handleDeleteTodo}
        
        />
      
    </div>
  )
}

export default App1;
