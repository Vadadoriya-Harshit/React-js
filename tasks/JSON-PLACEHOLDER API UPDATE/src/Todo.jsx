import React, { useState } from 'react'
const initialTodo =[
  {id:1,title:"Html"},
  {id:2,title:"css"},
  {id:3,title:"js"},
  {id:4,title:"jquery"},
]
function Todo() {
  const[todos,settodos]=useState(initialTodo);
  const[isEditing,setisEditing]=useState("");
  const[editText,seteditText]=useState("");
  const[add,setadd]=useState("");
  const addTodo = ()=>{
   if(add=="")
   {
    alert("please add some task");
   }
   else{
    settodos([...todos,{id:todos.length +1,title :add}]);
    setadd("")
   }
  }
  const deleteTodo = (id)=>{
    
      settodos(todos.filter((todo)=>todo.id !==id));
     
  }
  const editStart = (id,text)=>{
    setisEditing(id);
    seteditText(text);
  }
  const saveTodo = (id)=>{
   const updatedTodo = todos.map((todo)=>{
      if(todo.id == id)
      {
        return {...todo,title:editText}
      }
      return {...todo}
   });
   settodos(updatedTodo);
   setisEditing(null)

  }
  return (
    <div>
      <h1>
        Todo App
      </h1>
      <input type="text" name="" id="" value={add} onChange={(e)=>setadd(e.target.value)} />
      <button onClick={addTodo}>
        Add
      </button>
      {
        todos.map((el)=>( 
          <ul>
            <li key={el.id}>
           {
            isEditing == el.id ?
             (<div>
               <input type="text" name="" id="" value={editText} onChange={(e)=>seteditText(e.target.value)} />
               <button onClick={()=>saveTodo(el.id)}>
                Save
               </button>
             </div>) :
              (<div>
                {el.title}
                <button onClick={()=>editStart(el.id,el.title)}>
                 Edit
                </button>
                <button onClick={()=>deleteTodo(el.id)}>
                  Delete
                </button>

              </div>)
           }
            </li>
          </ul>
        ))
      }
    </div>
  )
}

export default Todo
