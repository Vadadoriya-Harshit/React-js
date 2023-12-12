import React, { createContext, useContext, useState } from 'react'
 const mainVal = createContext();
function Dev() {
    const [currentUser , setcurrentUser]=useState("");
    console.log(currentUser);
  return (
    <div>
      <mainVal.Provider value={{currentUser,setcurrentUser}}> 
        <Loginform />
      </mainVal.Provider>
    </div>
  )
}

function Loginform() {

  const [Fname,setFname]=useState("");
  const [Lname,setLname]=useState("");
  const fullName = `${Fname} ${Lname}`;

   const useVal = useContext(mainVal);
   const canLogin = Fname!="" && Lname!="";
  const sendData = (e)=>{
     useVal.setcurrentUser(fullName);
     setFname("");
     setLname("");

     e.preventDefault();
  }

  return (
    <form action="" onSubmit={sendData}> 
    <div>
      <div className="Container col-3 shadow border border-2 m-auto my-5 p-5">

<label htmlFor="">First Name</label>
<br />

<input type="text" className='form-control' value={Fname} onChange={(e)=>setFname(e.target.value)}/>
<br />
<br />

<label htmlFor="">Last Name</label>
<br />

<input type="text" className='form-control' value={Lname} onChange={((e)=>setLname(e.target.value))}/>
<br />
<br />

<input type="checkbox" className='mb-5'/>
<span> Change Mode</span>

<div className="row">
  <div className="col-6">
    <button className='btn btn-primary'>Submit</button>
  </div>

  <div className="col-6">
    <button className='btn btn-primary'>Reset</button>
  </div>
</div>
</div>
    </div>
    </form>
  )
}

export default Dev
