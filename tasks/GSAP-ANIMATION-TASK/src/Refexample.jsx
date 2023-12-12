import React, { useRef, useState } from 'react'

function Refexample() {
  const formRef = useRef();
  const [forminfo,setforminfo]=useState("");

  const formData = (e)=>{
const fnm = formRef.current.fname.value;
const lnm = formRef.current.lname.value;
  setforminfo({fnm,lnm})
  e.preventDefault();
  }
  return (
    <div>
      <h1>
      {forminfo.fnm}
      </h1>
      <h1>
      {forminfo.lnm}
      </h1>
        <form ref={formRef} onSubmit={formData}>
      <label>
        Firstname : 
        <input
        type='text'
        name='fname'
        
        />
        </label>
  
        <label>
        Lastname : 
        <input
        type='text'
        name='lname'
       
        
        />
        </label>
  
        <label>
        Email : 
        <input
        type='text'
        name='email'
        
        />
        </label>
  
        <label>
        <input
        type='submit'
        
        />
        </label>
      </form>
    </div>
  )
}

export default Refexample