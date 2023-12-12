import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

let nextId=3;
const initialVal = [
  {id:0,title:"Apple"},
  {id:1,title:"Banana"},
  {id:2,title:"Grapes"}
]

function App() {

  const  [todo,setTodo] = useState(initialVal);



  function handleAddTodo(title)
  {
    setTodo([
      ...todo,
      {
        id:nextId++,
        title:title
      }
    ])

  }


  function handlChangeTodo(nextTodo)
  {
    setTodo(todo.map((t)=>{
      if(t.id === nextTodo.id)
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
    setTodo(todo.filter((t)=>{
      return t.id !== todoId;
    }))

  }
  return (
    <div>

      <AddTodo onAddTodo={handleAddTodo}/>
      <TaskList
      
      todos={todo}
      onchangeTodo={handlChangeTodo}
      ondeleteTodo={handleDeleteTodo}
      
      />
      
    </div>
  )
}

export default App;
