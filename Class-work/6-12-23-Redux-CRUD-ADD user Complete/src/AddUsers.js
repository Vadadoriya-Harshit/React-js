import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUsers } from './UserReducer';
import { useNavigate } from 'react-router-dom';

function AddUsers() {

    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    const dispatch = useDispatch();
    const users = useSelector(state=>state.xyz);
    console.log(users);//array 

    const navigate = useNavigate()
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addUsers({id:users[users.length-1].id+1,name,email}));
        navigate('/')

    }
  return (
    <div className='row justify-content-center text-start'>

        <div className='col-6'>

        <h4>Add Users</h4>
       
        <form className='container' onSubmit={handleSubmit}>

            <div className='col-12'>
                <label className='form-label'>Id</label>
                <input disabled type='text' className='form-control'></input>
            </div>

            <div className='col-12'>
                <label className='form-label'>Name</label>
                <input value={name} required onChange={(e)=>{setName(e.target.value)}} type='text' className='form-control'></input>
             {name.length == 0 &&   <span className='text-danger'>* Enter name</span>}     </div>

            <div className='col-12'>
                <label className='form-label'>Email</label>
                <input type='text'  value={email} onChange={(e)=>{setEmail(e.target.value)}} className='form-control'></input>
            </div>

            <div className='col-12'>
                <button className='btn btn-success'>SAVE</button>
            </div>


        </form>

        </div>
      
    </div>
  )
}

export default AddUsers
