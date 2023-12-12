import React from 'react'
import {  useSelector } from 'react-redux'


function Home() {

//    const dispatch =  useDispatch();

const users =  useSelector(state => state.users);
console.log(users)


  return (
    <div>

        <div className='container'>
            <h4 className='my-2'> Create Users</h4>
            <button className='btn btn-info m-2'>ADD NEW (+)</button>
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
              <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>
                        <button className='btn btn-success me-2'>Edit</button>
                        <button className='btn btn-danger '>Delete</button>
                    </td>
                </tr>
              </tbody>
            </table>

        </div>
      
    </div>
  )
}

export default Home
