import React,{useState} from 'react';

function AddTodo({onAddTodo}) {


  const [title,setTitle] = useState('');

  return (
    <div>
      <input
      
      value={title}
     onChange = {(e)=>{setTitle(e.target.value)}}
      />

      <button onClick={()=>{
        onAddTodo(title)
      }}>Add</button>
    </div>
  )
}

export default AddTodo;
