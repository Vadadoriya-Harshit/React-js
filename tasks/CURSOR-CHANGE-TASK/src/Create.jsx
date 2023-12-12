import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Create() {
  const [userId, setuserId] = useState([]);
  const [id, setid] = useState([]);
  const [title, settitle] = useState([]);
  const [body, setbody] = useState([]);
  const go=useNavigate();

 const newData ={userId,id,title,body};
  const handelSubmit= (e)=>{
   e.preventDefault();
   console.log(newData);
   
   fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(newData)
   }).then((res=>res.json()));
   alert("post added successfully....!",go('/'));
  }

  return (
    <div>
      <form className="container" onSubmit={handelSubmit}>
        <div className="col-6 m-auto p-2 border border-2 rounded rounded-3">
          <h1 className='text-center'>
            Add Post
          </h1>
         <div className='p-3'>
         <label htmlFor="" className='py-3'>Userid :</label>
          <input className='form-control p-2' type="text" value={userId} onChange={(e)=>setuserId(e.target.value)} />
          <label htmlFor="" className='py-3'>Id :</label>
          <input className='form-control p-2' type="text" value={id} onChange={(e)=>setid(e.target.value)} />
          <label htmlFor="" className='py-3'>title :</label>
          <input className='form-control p-2' type="text" value={title} onChange={(e)=>settitle(e.target.value)} />
          <label htmlFor="" className='py-3'>body :</label>
          <input className='form-control p-2' type="text" value={body} onChange={(e)=>setbody(e.target.value)} />
         </div>
       
          <div className="row">
        
           <button className='btn btn-primary'>
              Submit
            </button>
          
          
            <Link to='/' className='btn btn-secondary my-2'>
              Go back
            </Link>
           
          </div>
        </div>
      </form>
    </div>
  )
}

export default Create