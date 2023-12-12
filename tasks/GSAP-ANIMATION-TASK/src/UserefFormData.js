import React from 'react';
import  { useRef, useState } from 'react';

function UserefFormData() {
    const [formInfo,setFormInfo] = useState("")
    const formRef = useRef();
  
    const formData = (e)=>{
  
      e.preventDefault();
     const fnm = formRef.current.fname.value;
     const lnm = formRef.current.lname.value;
     const em = formRef.current.email.value;
  
     setFormInfo({fnm,lnm,em})
  
    }
  
    console.log(formInfo)
  
    return (
      <div className='App'>
  
  
  <h2>{formInfo.fnm}</h2>
  <h2>{formInfo.lnm}</h2>
  <h2>{formInfo.em}</h2>
  
  
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

export default UserefFormData
