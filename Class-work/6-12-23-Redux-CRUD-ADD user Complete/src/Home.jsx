import React from 'react'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


function Home() {

   

const users =  useSelector(state => state.xyz);
console.log(users)


  return (
    <div >

        <div className='container'>
            <h4 className='my-2'> Create Users</h4>
            <Link to='/create' className='btn btn-info m-2'>ADD NEW (+)</Link>
            <table className='table'>
              <thead className='table-dark'>
              <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Actions</td>
                </tr>
              </thead>

              <tbody>
             

                {users.map((items)=>(

        <tr key={items.id}>
        <td>{items.id}</td>
        <td>{items.name}</td>
        <td>{items.email}</td>
        <td>
            <button className='btn btn-success me-2'>Edit</button>
            <button className='btn btn-danger '>Delete</button>
        </td>
        </tr>
                ))}
                   
              </tbody>
            </table>

        </div>
      
    </div>
  )
}

export default Home
