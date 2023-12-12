import React, { useState } from 'react'

function AddTodo1({onAddTodo}) {

    const [title,setTitle] = useState('');

  return (
    <div>
      
      <input
      
      value={title}
      placeholder='Add to do'
      onChange={(e)=>{
        setTitle(e.target.value)
      }}
      />

      <button onClick={()=>{
        setTitle('');
        onAddTodo(title)
      }}>Add</button>
    </div>
  )
}

export default AddTodo1;
